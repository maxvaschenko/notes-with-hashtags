import React, { useState, useEffect } from "react";
import { __Home__ } from "./styled";
import { CreateNote } from "../components/CreateNote";
import { NotesList } from "../components/NotesList";

const Home = props => {
  const [notesList, changeNotesList] = useState([]);
  const [selectedNoteId, changeSelectedNoteId] = useState(null);

  useEffect(() => {
    const persistedNotes = window.localStorage.getItem("notes");
    changeNotesList(JSON.parse(persistedNotes));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notesList));
  }, [notesList]);

  const addNote = note => changeNotesList([note, ...notesList]);

  const editNote = note => {
    const noteIndex = notesList.findIndex(item => item.id === note.id);
    changeNotesList([
      ...notesList.slice(0, noteIndex),
      note,
      ...notesList.slice(noteIndex + 1)
    ]);
  };

  const removeNote = note => {
    const noteIndex = notesList.findIndex(item => item.id === note.id);
    changeNotesList([
      ...notesList.slice(0, noteIndex),
      ...notesList.slice(noteIndex + 1)
    ]);
  };

  return (
    <__Home__>
      <CreateNote addNote={addNote} />
      <NotesList
        notes={notesList}
        editNote={editNote}
        removeNote={removeNote}
        selectedNoteId={selectedNoteId}
        changeSelectedNoteId={changeSelectedNoteId}
      />
    </__Home__>
  );
};

export default Home;
