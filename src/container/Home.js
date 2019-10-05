import React, { useState, useEffect } from "react";
import { __Home__ } from "./styled";
import { CreateNote } from "../components/CreateNote/index";
import { NotesList } from "../components/NotesList";

const Home = props => {
  const [notesList, changeNotesList] = useState([]);
  const [hashTagsList, changeHashTagsList] = useState([
    { value: "a" },
    { value: "aa" },
    { value: "aac" }
  ]);

  useEffect(() => {
    const persistedNotes = window.localStorage.getItem("notes");
    if (persistedNotes) {
      changeNotesList(JSON.parse(persistedNotes));
    }
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
      <CreateNote
        addNote={addNote}
        hashTagsList={hashTagsList}
        changeHashTagsList={changeHashTagsList}
      />
      <div>
        Hastags:
        {hashTagsList.map(item => (
          <div>{item.value}</div>
        ))}
      </div>
      <NotesList
        notes={notesList}
        hashTagsList={hashTagsList}
        changeHashTagsList={changeHashTagsList}
        editNote={editNote}
        removeNote={removeNote}
      />
    </__Home__>
  );
};

export default Home;
