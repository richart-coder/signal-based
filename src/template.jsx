<div style="font-family: Arial, sans-serif; max-width: 400px; margin: 20px auto; padding: 10px; border: 1px solid #ccc; border-radius: 8px;">
  <h2 style="text-align: center; color: #333;">計數器</h2>
  <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 15px;">
    <button style="padding: 5px 10px;" onClick={handleDecrement}>
      -
    </button>
    <span style="font-size: 20px; font-weight: bold; min-width: 40px; text-align: center;">
      {count()}
    </span>
    <button style="padding: 5px 10px;" onClick={handleIncrement}>
      +
    </button>
    <button style="padding: 5px 10px;" onClick={handleReset}>
      重設
    </button>
  </div>

  <h2 style="text-align: center; color: #333;">名字列表 ({totalNames()})</h2>
  <div style="display: flex; gap: 10px; margin-bottom: 15px;">
    <input
      type="text"
      placeholder="輸入名字"
      value={nameInput()}
      onInput={handleNameInput}
      style="flex: 1; padding: 5px; font-size: 14px; border-radius: 4px; border: 1px solid #ccc;"
    />
    <button
      disabled={isAddDisabled()}
      onClick={handleAddName}
      style="padding: 6px 12px; background-color: #007bff; color: #fff; border: none; border-radius: 4px; cursor: pointer;"
    >
      新增
    </button>
  </div>

  <ul style="list-style: none; padding: 0;">
    {names().map((name, idx) => (
      <li
        key={idx}
        style="display: flex; justify-content: space-between; padding: 6px 10px; border-bottom: 1px solid #eee;"
      >
        <span>{name}</span>
        <button
          onClick={() => handleDeleteName(idx)}
          style="background-color: #dc2626; color: #fff; border: none; border-radius: 4px; padding: 2px 8px; cursor: pointer;"
        >
          刪除
        </button>
      </li>
    ))}
  </ul>
</div>;
