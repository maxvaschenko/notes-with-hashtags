import React, { useState } from "react";
import nanoid from "nanoid";
import { __CreateNoteWrapper__ } from "./styled";

export const CreateNote = props => {
  const { addNote } = props;
  const [noteValue, changeNoteValue] = useState("");

  const changeInputValue = e => changeNoteValue(e.target.value);
  const addNoteToNoteList = () => addNote({ value: noteValue, id: nanoid() });

  return (
    <__CreateNoteWrapper__>
      <p>Create note</p>
      <input type="text" value={noteValue} onChange={changeInputValue} />
      <button onClick={addNoteToNoteList}>Add</button>
    </__CreateNoteWrapper__>
  );
};
