<div style="max-width: 800px; margin: 0 auto; padding: 24px; background-color: #f9fafb; min-height: 100vh;">
  <div style="background-color: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 24px;">
    <header style="margin-bottom: 24px;">
      <h1 style="font-size: 24px; font-weight: bold; color: #374151; margin-bottom: 8px;">
        Todo 應用程式
      </h1>

      <div style="display: flex; align-items: center; gap: 16px; font-size: 14px; color: #6b7280;">
        <span>總共: {totalTodoCount()}</span>
        <span>待完成: {activeTodoCount()}</span>
        <span>已完成: {completedTodoCount()}</span>
      </div>

      <div style="margin-top: 16px;">
        <div style="display: flex; justify-content: space-between; font-size: 14px; color: #6b7280; margin-bottom: 4px;">
          <span>完成進度</span>
          <span>{progressPercentage()}%</span>
        </div>
        <div style="width: 100%; background-color: #e5e7eb; border-radius: 9999px; height: 8px;">
          <div
            style={`background-color: #2563eb; height: 8px; border-radius: 9999px; transition: all 0.3s; width: ${progressPercentage()}%;`}
          ></div>
        </div>
      </div>
    </header>

    <div style="margin-bottom: 24px; padding: 16px; background-color: #f9fafb; border-radius: 8px;">
      <div style="display: flex; gap: 12px; margin-bottom: 12px;">
        <input
          type="text"
          style="flex: 1; padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px;"
          placeholder="輸入新的待辦事項..."
          value={newTodoText()}
          onInput={handleNewTodoInput}
          onKeyPress={handleNewTodoKeyPress}
        />
        <select
          style="padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px;"
          value={selectedPriority()}
          onChange={handlePriorityChange}
        >
          <option value="low">低優先級</option>
          <option value="medium">中優先 級</option>
          <option value="high">高優先級</option>
        </select>
        <button
          style="padding: 8px 24px; background-color: #2563eb; color: white; border-radius: 8px; border: none; cursor: pointer;"
          onClick={handleAddTodo}
          disabled={isAddButtonDisabled()}
        >
          新增
        </button>
      </div>
    </div>

    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
      <div style="display: flex; gap: 8px;">
        <button
          style={`padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ${
            filter() === "all" ? "#2563eb" : "white"
          }; color: ${
            filter() === "all" ? "white" : "#374151"
          }; cursor: pointer;`}
          onClick={handleFilterAllClick}
        >
          全部
        </button>
        <button
          style={`padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ${
            filter() === "active" ? "#2563eb" : "white"
          }; color: ${
            filter() === "active" ? "white" : "#374151"
          }; cursor: pointer;`}
          onClick={handleFilterActiveClick}
        >
          待完成 {activeTodoCount()}
        </button>
        <button
          style={`padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ${
            filter() === "completed" ? "#2563eb" : "white"
          }; color: ${
            filter() === "completed" ? "white" : "#374151"
          }; cursor: pointer;`}
          onClick={handleFilterCompletedClick}
        >
          已完成 {completedTodoCount()}
        </button>
      </div>

      <button
        style={`display: ${
          hasCompletedTodos() ? "block" : "none"
        }; padding: 8px 16px; background-color: #dc2626; color: white; border-radius: 8px; border: none; cursor: pointer;`}
        onClick={handleClearCompleted}
      >
        清除已完成
      </button>
    </div>

    <div style="display: flex; flex-direction: column; gap: 8px;">
      {isEmptyList() ? (
        <div style="text-align: center; padding: 32px; color: #6b7280;">
          <p style="font-size: 18px;">沒有{}事項</p>
          <p style="font-size: 14px;">新增一個待辦事項開始吧！</p>
        </div>
      ) : (
        filteredTodos().map((todo) => (
          <div
            key={todo.id}
            style={`padding: 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ${
              todo.completed ? "#f9fafb" : "white"
            }; opacity: ${todo.completed ? 0.7 : 1};`}
          >
            <div style="display: flex; align-items: center; gap: 12px;">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleClick(todo.id)}
              />
              <span
                style={`flex: 1; text-decoration: ${
                  todo.completed ? "line-through" : "none"
                }; color: ${todo.completed ? "#6b7280" : "#374151"};`}
              >
                {todo.text}
              </span>
              <span
                style={`font-size: 12px; padding: 2px 8px; border-radius: 12px; background-color: ${getPriorityColor(
                  todo.priority
                )}; color: white;`}
              >
                {getPriorityText(todo.priority)}
              </span>
              <span
                style={`font-size: 12px; color: ${
                  isOverdue(todo.dueDate) && !todo.completed
                    ? "#dc2626"
                    : "#6b7280"
                };`}
              >
                {formatDate(todo.dueDate)}
              </span>
              <button
                style="padding: 4px 8px; background-color: #dc2626; color: white; border-radius: 4px; border: none; cursor: pointer; font-size: 12px;"
                onClick={() => handleDeleteClick(todo.id)}
              >
                刪除
              </button>
            </div>
          </div>
        ))
      )}
    </div>

    {totalTodoCount() > 0 && (
      <footer style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; text-align: center; font-size: 14px; color: #6b7280;">
        <p>
          總共 {totalTodoCount()} 個事項
          {activeTodoCount() > 0 ? `，還有 ${activeTodoCount()} 個待完成` : ""}
          {completedTodoCount() > 0
            ? `，已完成 ${completedTodoCount()} 個`
            : ""}
        </p>
      </footer>
    )}
  </div>
</div>;
