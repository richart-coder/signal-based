import generateReactiveTemplate from "./src/generateReactiveTemplate.js";
import signal, { computed } from "./signal.js";

const count = signal(0);
const nameInput = signal("");
const names = signal([]);

const isAddDisabled = computed(() => nameInput().trim().length === 0);
const totalNames = computed(() => names().length);

const handleIncrement = () => count.set(count() + 1);
const handleDecrement = () => count.set(count() - 1);
const handleReset = () => count.set(0);

const handleNameInput = (e) => nameInput.set(e.target.value);
const handleAddName = () => {
  const name = nameInput().trim();
  if (!name) return;
  names.set([...names(), name]);
  nameInput.set("");
};

const handleDeleteName = (index) => {
  const newList = names().slice();
  newList.splice(index, 1);
  names.set(newList);
};

const context = {
  count,
  nameInput,
  names,
  isAddDisabled,
  totalNames,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleNameInput,
  handleAddName,
  handleDeleteName,
};

async function loadAndMount() {
  const { jsxAST } = await import(`./compiled-template.js?t=${Date.now()}`);
  const template = generateReactiveTemplate(jsxAST.body[0].expression, context);
  const app = document.getElementById("app");
  template.mount(app);
}

loadAndMount();
