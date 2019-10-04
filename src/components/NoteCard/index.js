import React, { useState } from "react";
import { __NoteCardWrapper__ } from "./styled";

export const NoteCard = props => {
  const {
    value,
    editNote,
    id,
    removeNote,
    selectedNoteId,
    changeSelectedNoteId
  } = props;
  const [editableValue, changeEditableValue] = useState(value);

  const changeSelectedId = id => () => changeSelectedNoteId(id);
  const editValue = e => changeEditableValue(e.target.value);
  const saveEditedValue = () => {
    if (value !== editableValue) {
      editNote({ value: editableValue, id });
    }
    changeSelectedId(null)();
  };
  const removeCard = () => {
    removeNote({ value: editableValue, id });
  };

  const editMode = selectedNoteId === id;
  return (
    <__NoteCardWrapper__ onClick={!editMode ? changeSelectedId(id) : null}>
      {editMode ? (
        <>
          <input type="text" value={editableValue} onChange={editValue} />{" "}
          <button onClick={saveEditedValue}>Save</button>
          <button onClick={removeCard}>Delete</button>
          <button onClick={changeSelectedId(null)}>Exit edit mode</button>
        </>
      ) : (
        <p>{value}</p>
      )}
    </__NoteCardWrapper__>
  );
};
