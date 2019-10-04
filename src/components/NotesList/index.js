import React from "react";
import { __NotesListWrapper__ } from "./styled";
import { NoteCard } from "../NoteCard";

export const NotesList = props => {
  const {
    notes,
    editNote,
    removeNote,
    selectedNoteId,
    changeSelectedNoteId
  } = props;
  console.log(notes);
  return (
    <__NotesListWrapper__>
      <p>All notes</p>
      {notes &&
        notes.map(item => (
          <NoteCard
            value={item.value}
            key={item.id}
            editNote={editNote}
            removeNote={removeNote}
            id={item.id}
            selectedNoteId={selectedNoteId}
            changeSelectedNoteId={changeSelectedNoteId}
          />
        ))}
    </__NotesListWrapper__>
  );
};
