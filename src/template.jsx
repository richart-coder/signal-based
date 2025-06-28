<div style="font-family: Arial, sans-serif; max-width: 500px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px;">
  <h1 style="text-align: center; color: #333;">溫度 Pipe 測試</h1>

  <div style="margin-bottom: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
    <h3>寫法一：條件式 Pipe</h3>
    <p>
      當前溫度:{" "}
      {tempUnit() === "F"
        ? temperature() |> toFahrenheit |> fahrenheit
        : temperature() |> celsius}
    </p>
  </div>

  <div style="margin-bottom: 20px; padding: 15px; background-color: #e8f4fd; border-radius: 5px;">
    <h3>寫法二：Computed Pipe</h3>
    <p>當前溫度: {tempDisplay()}</p>
  </div>

  <div style="margin-bottom: 20px; padding: 15px; background-color: #fff3cd; border-radius: 5px;">
    <h3>其他數據</h3>
    <p>交易量比率: {volumeRatio() |> percent}</p>
    <p>當前價格: {price() |> formatCurrency |> addSymbol}</p>
    <p>用戶名: {userName() |> formatUser |> capitalize |> addPrefix}</p>
  </div>

  <div style="padding: 15px; background-color: #f0f8ff; border-radius: 5px;">
    <h3>控制面板</h3>

    <div style="margin-bottom: 15px;">
      <button
        onClick={handleUnitToggle}
        style="padding: 8px 16px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
      >
        切換到 {tempUnit() === "C" ? "華氏" : "攝氏"}
      </button>
    </div>

    <div style="margin-bottom: 10px;">
      <label>溫度: </label>
      <input
        type="number"
        step="0.1"
        value={temperature()}
        onInput={handleTempChange}
        style="margin-left: 10px; padding: 5px; border: 1px solid #ddd; border-radius: 4px;"
      />
    </div>

    <div style="margin-bottom: 10px;">
      <label>交易量: </label>
      <input
        type="number"
        step="0.001"
        value={volumeRatio()}
        onInput={handleVolumeChange}
        style="margin-left: 10px; padding: 5px; border: 1px solid #ddd; border-radius: 4px;"
      />
    </div>

    <div style="margin-bottom: 10px;">
      <label>價格: </label>
      <input
        type="number"
        step="0.01"
        value={price()}
        onInput={handlePriceChange}
        style="margin-left: 10px; padding: 5px; border: 1px solid #ddd; border-radius: 4px;"
      />
    </div>

    <div style="margin-bottom: 10px;">
      <label>用戶名: </label>
      <input
        type="text"
        value={userName()}
        onInput={handleUserChange}
        style="margin-left: 10px; padding: 5px; border: 1px solid #ddd; border-radius: 4px;"
      />
    </div>
  </div>
</div>;
