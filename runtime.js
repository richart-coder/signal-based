import generateReactiveTemplate from "./src/generateReactiveTemplate.js";
import signal, { effect, computed } from "./signal.js";
import templateCache from "./templateCache.js";

let lastCompiled = 0;
let currentTemplateInstance = null;

const todos = signal([
  {
    id: 1,
    text: "學習 JavaScript",
    completed: false,
    priority: "high",
    dueDate: "2024-01-15",
  },
  {
    id: 2,
    text: "建立模板系統",
    completed: true,
    priority: "medium",
    dueDate: "2024-01-10",
  },
  {
    id: 3,
    text: "優化性能",
    completed: false,
    priority: "low",
    dueDate: "2024-01-20",
  },
]);

const newTodoText = signal("");
const filter = signal("all");
const selectedPriority = signal("medium");

const filteredTodos = computed(() => {
  const allTodos = todos();
  const currentFilter = filter();

  if (currentFilter === "active") {
    return allTodos.filter((todo) => todo.completed === false);
  } else if (currentFilter === "completed") {
    return allTodos.filter((todo) => todo.completed === true);
  }
  return allTodos;
});

const activeTodoCount = computed(
  () => todos().filter((todo) => todo.completed === false).length
);

const completedTodoCount = computed(
  () => todos().filter((todo) => todo.completed === true).length
);

const totalTodoCount = computed(() => todos().length);

const hasCompletedTodos = computed(() => completedTodoCount() > 0);

const progressPercentage = computed(() => {
  const total = totalTodoCount();
  if (total === 0) return 0;
  return Math.round((completedTodoCount() / total) * 100);
});

const isAddButtonDisabled = computed(() => newTodoText().trim().length === 0);
const isEmptyList = computed(() => filteredTodos().length === 0);

const handleAddTodo = () => {
  const text = newTodoText().trim();
  if (text.length === 0) return;

  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false,
    priority: selectedPriority(),
    dueDate: new Date().toISOString().split("T")[0],
  };

  const currentTodos = todos();
  const updatedTodos = currentTodos.slice();
  updatedTodos.push(newTodo);
  todos.set(updatedTodos);
  newTodoText.set("");
};

const handleToggleTodo = (id) => {
  const currentTodos = todos();
  const newTodos = currentTodos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }
    return todo;
  });
  todos.set(newTodos);
};

const handleDeleteTodo = (id) => {
  const currentTodos = todos();
  const newTodos = currentTodos.filter((todo) => todo.id !== id);
  todos.set(newTodos);
};

const handleClearCompleted = () => {
  const currentTodos = todos();
  const newTodos = currentTodos.filter((todo) => todo.completed === false);
  todos.set(newTodos);
};

const handleFilterAllClick = () => {
  filter.set("all");
};

const handleFilterActiveClick = () => {
  filter.set("active");
};

const handleFilterCompletedClick = () => {
  filter.set("completed");
};

const handleNewTodoInput = (e) => {
  newTodoText.set(e.target.value);
};

const handlePriorityChange = (e) => {
  selectedPriority.set(e.target.value);
};

const getPriorityText = (priority) => {
  if (priority === "high") {
    return "高優先級";
  } else if (priority === "medium") {
    return "中優先級";
  } else if (priority === "low") {
    return "低優先級";
  } else {
    return priority;
  }
};

const getPriorityColor = (priority) => {
  if (priority === "high") {
    return "#dc2626";
  } else if (priority === "medium") {
    return "#d97706";
  } else if (priority === "low") {
    return "#059669";
  } else {
    return "#6b7280";
  }
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("zh-TW");
};

const isOverdue = (dateString) => {
  const dueDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return dueDate < today;
};

const handleToggleClick = (id) => {
  handleToggleTodo(id);
};

const handleDeleteClick = (id) => {
  handleDeleteTodo(id);
};

const context = {
  todos,
  filteredTodos,
  newTodoText,
  filter,
  selectedPriority,

  activeTodoCount,
  completedTodoCount,
  totalTodoCount,
  hasCompletedTodos,
  progressPercentage,
  isAddButtonDisabled,
  isEmptyList,

  handleAddTodo,
  handleToggleTodo,
  handleDeleteTodo,
  handleToggleClick,
  handleDeleteClick,

  handleClearCompleted,
  handleFilterAllClick,
  handleFilterActiveClick,
  handleFilterCompletedClick,
  handleNewTodoInput,
  handlePriorityChange,

  getPriorityText,
  getPriorityColor,
  formatDate,
  isOverdue,
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
