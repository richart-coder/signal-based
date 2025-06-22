import generateReactiveTemplate from "./src/generateReactiveTemplate.js";
import signal, { effect, computed } from "./signal.js";
import templateCache from "./templateCache.js";

let lastCompiled = 0;
let currentTemplateInstance = null;

const count = signal(0);
const handleIncrement = () => {
  count.set(count() + 1);
};
const handleDecrement = () => {
  count.set(count() - 1);
};
const context = {
  count,
  handleIncrement,
  handleDecrement,
};
async function loadAndMount() {
  try {
    const module = await import(`./compiled-template.js?t=${Date.now()}`);

    if (module.lastCompiled <= lastCompiled) {
      return;
    }

    lastCompiled = module.lastCompiled;

    const options = {
      context,
      effect,
    };

    const reactiveTemplate = templateCache.getOrCreate(
      module.compiledTemplate,
      options,
      (compiledTemplate, options) =>
        generateReactiveTemplate(compiledTemplate, options)
    );

    if (currentTemplateInstance === reactiveTemplate) {
      console.log("⏭️ 跳過：使用相同的模板實例");
      return;
    }

    currentTemplateInstance = reactiveTemplate;

    const app = document.getElementById("app");
    app.innerHTML = "";
    reactiveTemplate.mount(app);

    console.log("✅ 模板已載入並掛載");
    console.log(`📦 緩存大小: ${templateCache.size()}`);
  } catch (error) {
    console.error("❌ 載入模板失敗:", error);
  }
}
loadAndMount();

window.addEventListener("beforeunload", () => {
  templateCache.clear();
});
