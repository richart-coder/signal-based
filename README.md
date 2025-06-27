# 響應式模板系統

基於 Signal 架構，支援類似 JSX 的語法和 React 風格的狀態管理。

## ✨ 核心特性

### 🚀 Signal 響應式系統

- **Signal**: 響應式狀態容器，支援 `get()` 和 `set(value)` 操作
- **Computed**: 自動依賴追蹤的計算屬性
- **Effect**: 副作用管理，自動響應狀態變化

### 🎯 模板語法

- **JSX 風格語法**: 支援熟悉的 React 寫法
- **動態綁定**: 屬性、事件、內容的響應式綁定
- **條件渲染**: `{condition && <Component />}` 語法
- **列表渲染**: `{items.map(item => <Item />)}` 語法

### ⚡ 性能優化

- **Reference Equality**: React 風格的淺比較策略
- **模板緩存**: 智能緩存機制，避免重複編譯
- **批量 DOM 操作**: 使用 DocumentFragment 優化渲染
- **選擇性更新**: 只更新變化的部分

## 🎮 快速開始

### 1. 基本狀態管理

```javascript
import signal, { computed, effect } from "./signal.js";

const count = signal(0);
const doubleCount = computed(() => count() * 2);

effect(() => {
  console.log(`Count: ${count()}, Double: ${doubleCount()}`);
});

count.set(5);
```

### 2. 模板定義

```html

<div>
  <h1>計數器: {count()}</h1>
  <p>雙倍值: {doubleCount()}</p>

  <button onClick={increment}>+1</button>
  <button onClick={() => count.set(0)}>重設</button>

  {count() > 5 && (
    <p style="color: red;">數值過大！</p>
  )}
</div>
```

### 工作流程

1. **模板解析**: 將 JSX 語法解析為靜態和動態部分
2. **表達式編譯**: 創建響應式函數，支援任意 JavaScript 表達式
3. **依賴追蹤**: 自動追蹤 Signal 依賴關係
4. **選擇性更新**: 只更新發生變化的 DOM 節點

## 🎨 支援的語法特性

### 屬性綁定

```html
<input value={inputValue()} disabled={isLoading()} className={isActive() ?
'active' : 'inactive'} />
```

### 事件處理

```html

<button onClick={handleClick}>點擊</button>


<button onClick={() => handleClick(item.id)}>刪除</button>


<button onClick={(e) => handleSubmit(e, formData())}>提交</button>
```

### 條件渲染

```html
{isLoggedIn() && <Dashboard user="{user()}" />} {status() === 'loading' ? (
<Spinner />
) : (
<content data="{data()}" />
)}
```

### 列表渲染

```html
{todos().map(todo => ( <TodoItem key={todo.id} todo={todo} onToggle={() =>
toggleTodo(todo.id)} /> ))}
```

## 🛠️ 實際應用範例

### Todo 應用

```javascript
const todos = signal([]);
const filter = signal("all");
const newTodoText = signal("");

const filteredTodos = computed(() => {
  const allTodos = todos();
  const currentFilter = filter();

  if (currentFilter === "active") {
    return allTodos.filter((todo) => !todo.completed);
  }
  if (currentFilter === "completed") {
    return allTodos.filter((todo) => todo.completed);
  }
  return allTodos;
});

const activeTodoCount = computed(
  () => todos().filter((todo) => !todo.completed).length
);

const handleAddTodo = () => {
  const text = newTodoText().trim();
  if (!text) return;

  todos.set([
    ...todos(),
    {
      id: Date.now(),
      text,
      completed: false,
    },
  ]);
  newTodoText.set("");
};

const handleToggleTodo = (id) => {
  todos.set(
    todos().map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};
```

## 🔧 進階功能

1. **使用 Immutable 更新**: 確保觸發響應式更新

```javascript
// ✅ 正確 - 創建新陣列
todos.set([...todos(), newTodo]);

// ❌ 錯誤 - 直接修改不會觸發更新
todos().push(newTodo);
```

2. **合理使用 Computed**: 避免重複計算

```javascript
const expensiveComputed = computed(() => {
  return data().reduce((acc, item) => {
    return acc + processItem(item);
  }, 0);
});
```

3. **優化事件處理**: 使用箭頭函數傳遞參數

```javascript
{
  items().map((item) => (
    <Item key={item.id} onClick={() => selectItem(item.id)} />
  ));
}
```
