// prettier-ignore
<div className="container">
  <h1>{title()}</h1>
  <div>
    <p>Count: {count()}</p>
    <input type="text" onInput={handleInput} placeholder="type here..." value={inputValue()} disabled={isDisabled()} />
    {inputValue()}
    <br />

    <button onClick={handleClick}>Toggle Input12</button>
    <p>Status: {getToggleText()}</p>
  </div>
</div>
