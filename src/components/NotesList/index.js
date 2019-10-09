import React from "react";
import { __NotesListWrapper__ } from "./styled";
import { NoteCard } from "../NoteCard";

export const NotesList = props => {
  const {
    notes,
    editNote,
    removeNote,
    hashTagsList,
    changeHashTagsList
  } = props;
  return (
    <__NotesListWrapper__>
      <p>All notes</p>
      {notes && notes.length > 0 ? (
        notes.map(item => (
          <NoteCard
            value={item.value}
            key={item.id}
            editNote={editNote}
            removeNote={removeNote}
            id={item.id}
            hashTagsList={hashTagsList}
            changeHashTagsList={changeHashTagsList}
          />
        ))
      ) : (
        <p>There are no notes here yet</p>
      )}
    </__NotesListWrapper__>
  );
};
