import React, { useState, useEffect } from "react";
import { __Home__ } from "./styled";
import { CreateNote } from "../components/CreateNote";
import { NotesList } from "../components/NotesList";

const Home = props => {
  const [notesList, changeNotesList] = useState([]);

  useEffect(() => {
    const persistedNotes = window.localStorage.getItem("notes");
    changeNotesList(JSON.parse(persistedNotes));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notesList));
  }, [notesList]);

  const addNote = note => changeNotesList([note, ...notesList]);

  return (
    <__Home__>
      <CreateNote addNote={addNote} />
      <NotesList notes={notesList} />
    </__Home__>
  );
};

export default Home;
