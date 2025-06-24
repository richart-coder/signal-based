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
      const deps = Array.from(dependencies);
      dependencies.clear();
      deps.forEach((dep) => dep());
    }
  };

  return signalFn;
}

function computed(callback) {
  const resultSignal = signal();

  const recompute = () => {
    const prevDependency = currentDependency;
    currentDependency = recompute;

    try {
      const value = callback();
      resultSignal.set(value);
    } finally {
      currentDependency = prevDependency;
    }
  };
  recompute();
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
