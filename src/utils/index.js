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

export const mergeDedupe = arr => {
  return [...new Set([].concat(...arr))];
};

export const getHashTagsFromEditorState = editorState => {
  const text = editorState.getCurrentContent().getPlainText();
  return text.match(/(^|\B)#(?![0-9_]+\b)([a-zA-Z0-9_]{1,30})(\b|\r)/g) || [];
};
