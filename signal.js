let currentDependency = null;

function signal(initialState) {
  let state = initialState;
  const dependencies = new Set();

  const signalFn = () => {
    if (currentDependency) {
      dependencies.add(currentDependency);
    }
    return state;
  };

  signalFn.set = (value) => {
    const newState = typeof value === "function" ? value(state) : value;

    if (state !== newState) {
      state = newState;
      dependencies.forEach((dep) => dep());
    }
  };

  return signalFn;
}

function computed(callback) {
  const resultSignal = signal();

  const recompute = () => {
    const value = callback();
    resultSignal.set(value);
  };

  const prevDependency = currentDependency;
  currentDependency = recompute;

  try {
    recompute();
  } finally {
    currentDependency = prevDependency;
  }

  return resultSignal;
}

function effect(effectFn) {
  const runEffect = () => {
    const prevDependency = currentDependency;
    currentDependency = runEffect;

    try {
      effectFn();
    } finally {
      currentDependency = prevDependency;
    }
  };

  runEffect();
  return runEffect;
}

export { effect, computed };
export default signal;
