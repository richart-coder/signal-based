// prettier-ignore
<div className={getClass()}>
  <h1>{getTitle()}</h1>
  <div>
    <p>Count: {count()}</p>
    <input type="text" value={getValue()} disabled={isInputDisabled()} />
    <br />
    <button onClick={handleClick}>Toggle Input</button>
    <p>Status: {isInputDisabled()}</p>
  </div>
</div>
