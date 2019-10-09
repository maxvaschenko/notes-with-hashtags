import React, { useState, useEffect } from "react";
import nanoid from "nanoid";
import { __Home__ } from "./styled";
import { CreateNote } from "../components/CreateNote/index";
import { NotesList } from "../components/NotesList";

const Home = props => {
  const [notesList, changeNotesList] = useState([]);
  const [hashTagsList, changeHashTagsList] = useState([]);

  useEffect(() => {
    const persistedNotes = window.localStorage.getItem("notes");
    const hashTags = window.localStorage.getItem("hashTags");
    if (persistedNotes) {
      changeNotesList(JSON.parse(persistedNotes));
    }
    if (hashTags) {
      changeHashTagsList(JSON.parse(hashTags));
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notesList));
    window.localStorage.setItem("hashTags", JSON.stringify(hashTagsList));
  }, [notesList, hashTagsList]);

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
      <div className="wrapper">
        <aside>
          <h2>Hashtags:</h2>
          {hashTagsList.map(item => (
            <div className={"sidebar-hashTag"} key={nanoid()}>
              {item}
            </div>
          ))}
        </aside>
        <main>
          <CreateNote
            addNote={addNote}
            hashTagsList={hashTagsList}
            changeHashTagsList={changeHashTagsList}
          />
          <NotesList
            notes={notesList}
            hashTagsList={hashTagsList}
            changeHashTagsList={changeHashTagsList}
            editNote={editNote}
            removeNote={removeNote}
          />
        </main>
      </div>
    </__Home__>
  );
};

export default Home;
