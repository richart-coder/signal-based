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

    if (Object.is(state, newState)) {
      return;
    }

    state = newState;
    const subsToRun = [...subscribers];
    subsToRun.forEach((sub) => sub());
  };

  signalFn.isSignal = true;

  return signalFn;
}

function computed(callback) {
  const resultSignal = signal();
  const internalSet = resultSignal.set;
  const recompute = () => {
    cleanup(recompute);
    const prevSubscriber = currentSubscriber;
    currentSubscriber = recompute;

    try {
      const value = callback();
      internalSet(value);
    } finally {
      currentSubscriber = prevSubscriber;
    }
  };
  recompute.sources = new Set();

  recompute();
  resultSignal.set = null;
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
  return () => cleanup(runEffect);
}

export { effect, computed };
export default signal;
