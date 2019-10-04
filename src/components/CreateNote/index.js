import React, { useState } from "react";
import nanoid from "nanoid";
import plus from "../../assets/icons/plus.png";
import { __CreateNoteWrapper__ } from "./styled";

export const CreateNote = props => {
  const { addNote } = props;
  const [noteValue, changeNoteValue] = useState("");

  const changeInputValue = e => changeNoteValue(e.target.value);
  const addNoteToNoteList = () => {
    addNote({ value: noteValue, id: nanoid() });
    changeNoteValue("");
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      addNote({ value: noteValue, id: nanoid() });
      changeNoteValue("");
    }
  };

  return (
    <__CreateNoteWrapper__>
      <p>Create note</p>
      <div className="input-wrapper">
        <input
          type="text"
          value={noteValue}
          onChange={changeInputValue}
          onKeyDown={handleKeyPress}
        />
        <div className={"image-container"} onClick={addNoteToNoteList}>
          <img src={plus} alt="" />
        </div>
      </div>
    </__CreateNoteWrapper__>
  );
};
