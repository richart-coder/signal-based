let currentSubscriber = null;

function cleanup(subscriber) {
  for (const source of subscriber.sources) {
    source.delete(subscriber);
  }
  subscriber.sources.clear();
}

function signal(initialState) {
  let state = initialState;
  const subscribers = new Set();

  const signalFn = () => {
    if (currentSubscriber) {
      subscribers.add(currentSubscriber);
      currentSubscriber.sources.add(subscribers);
    }
    return state;
  };

  signalFn.set = (value) => {
    const newState = typeof value === "function" ? value(state) : value;

    if (state !== newState) {
      state = newState;
      const subsToRun = [...subscribers];
      subsToRun.forEach((sub) => sub());
    }
  };

  return signalFn;
}

function computed(callback) {
  const resultSignal = signal();

  const recompute = () => {
    cleanup(recompute);
    const prevSubscriber = currentSubscriber;
    currentSubscriber = recompute;

    try {
      const value = callback();
      resultSignal.set(value);
    } finally {
      currentSubscriber = prevSubscriber;
    }
  };
  recompute.sources = new Set();

  recompute();
  return resultSignal;
}

function effect(effectFn) {
  const runEffect = () => {
    cleanup(runEffect);
    const prevSubscriber = currentSubscriber;
    currentSubscriber = runEffect;

    try {
      effectFn();
    } finally {
      currentSubscriber = prevSubscriber;
    }
  };
  runEffect.sources = new Set();

  runEffect();
  return runEffect;
}

export { effect, computed };
export default signal;
