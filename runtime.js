import generateReactiveTemplate from "./src/generateReactiveTemplate.js";
import signal, { effect, computed } from "./signal.js";

let lastCompiled = 0;

const count = signal(0);
const cssClass = signal("container");
const imageUrl = signal("https://via.placeholder.com/150");
const imageAlt = signal("Placeholder image");
const inputValue = signal("Type here...");
const isDisabled = signal(false);

const getClass = () => cssClass();
const getTitle = () => title();
const getImageUrl = () => imageUrl();
const getAlt = () => imageAlt();
const getValue = () => inputValue();
const isInputDisabled = () => isDisabled();
const getToggleText = () => (isDisabled() ? "Disabled" : "Enabled");

const handleClick = () => {
  console.log("Button clicked!");
  isDisabled.set(!isDisabled());
};

const context = {
  count,
  cssClass,
  imageUrl,
  imageAlt,
  inputValue,
  isDisabled,
  getClass,
  getTitle,
  getImageUrl,
  getAlt,
  getValue,
  isInputDisabled,
  handleClick,
  getToggleText,
};

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

loadAndMount();
const title = computed(() => `Dynamic Title ${count()}`);

setInterval(() => {
  count.set(count() + 1);
}, 1000);
