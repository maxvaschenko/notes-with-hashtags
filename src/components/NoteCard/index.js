import React, { useState } from "react";
import save from "../../assets/icons/save.svg";
import del from "../../assets/icons/del.svg";
import onClickOutside from "react-onclickoutside";
import { __NoteCardWrapper__ } from "./styled";

const NoteCard = props => {
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
  NoteCard.handleClickOutside = () => changeSelectedId(null)();

  const editMode = selectedNoteId === id;
  return (
    <__NoteCardWrapper__ onClick={!editMode ? changeSelectedId(id) : null}>
      {editMode ? (
        <>
          <textarea value={editableValue} onChange={editValue} />
          <div className="icons-container">
            <img src={save} alt="" onClick={saveEditedValue} />
            <img src={del} alt="" onClick={removeCard} />
          </div>
        </>
      ) : (
        <p>{value}</p>
      )}
    </__NoteCardWrapper__>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => NoteCard.handleClickOutside
};

export default onClickOutside(NoteCard, clickOutsideConfig);
