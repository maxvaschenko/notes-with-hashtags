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

export const getNotesForUpdate = (
  hashTagsList,
  newNoteHashTags,
  action = "+"
) => {
  const newNotes = newNoteHashTags.map(newNote => {
    const existedTag = hashTagsList.find(global => global.value === newNote);
    return Object.assign(
      {},
      existedTag ? { value: existedTag.value } : { value: newNote },
      existedTag ? { count: existedTag.count + 1 } : { count: 1 }
    );
  });
  const oldWithoutFound = hashTagsList.filter(oldTag =>
    newNotes.every(newTag => oldTag.value !== newTag.value)
  );
  return [...newNotes, ...oldWithoutFound];
};

export const getHashTagsFromEditorState = editorState => {
  const text = editorState.getCurrentContent().getPlainText();
  return text.match(/(^|\B)#(?![0-9_]+\b)([a-zA-Z0-9_]{1,30})(\b|\r)/g) || [];
};
