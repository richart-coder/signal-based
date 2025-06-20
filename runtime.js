import generateReactiveTemplate from "./src/generateReactiveTemplate.js";
import signal, { effect } from "./signal.js";

let lastCompiled = 0;
const count = signal(0);
const context = { count };
async function loadAndMount() {
  try {
    const module = await import(`./compiled-template.js?t=${Date.now()}`);

    if (module.lastCompiled <= lastCompiled) return;

    lastCompiled = module.lastCompiled;

    const reactiveTemplate = generateReactiveTemplate(module.compiledTemplate, {
      context,
      effect,
    });

    const app = document.getElementById("app");
    app.innerHTML = "";
    reactiveTemplate.mount(app);

    console.log("🔄 模板已重新載入");
  } catch (error) {
    console.error("載入模板失敗:", error);
  }
}
setInterval(() => {
  count.set(count() + 1);
}, 1000);
loadAndMount();
