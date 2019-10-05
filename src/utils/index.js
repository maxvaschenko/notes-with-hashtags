export function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer ? reducer(state, action.payload) : state;
  };
}

export function devTools(env) {
  if (env) {
    return (
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  } else {
    return {};
  }
}

export const getLastWord = str => {
  const allWords = str.split(" ");
  return allWords[allWords.length - 1];
};
