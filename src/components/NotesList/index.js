import React from "react";
import { __NotesListWrapper__ } from "./styled";
import { NoteCard } from "../NoteCard";

export const NotesList = props => {
  const { notes } = props;
  return (
    <__NotesListWrapper__>
      <p>All notes</p>
      {notes &&
        notes.map(item => <NoteCard value={item.value} key={item.id} />)}
    </__NotesListWrapper__>
  );
};
