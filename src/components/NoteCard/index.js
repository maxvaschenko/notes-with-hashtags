import React, { useState, useRef, useEffect } from "react";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createHashtagPlugin from "draft-js-hashtag-plugin";
import save from "../../assets/icons/save.svg";
import del from "../../assets/icons/del.svg";
import done from "../../assets/icons/done.svg";
import { __NoteCardWrapper__ } from "./styled";
import {
  getHashTagsFromEditorState,
  getNotesForUpdate,
  mergeDedupe
} from "../../utils";
import nanoid from "nanoid";
const hashtagPlugin = createHashtagPlugin({
  theme: { hashtag: "hashtag" }
});
const plugins = [hashtagPlugin];

export const NoteCard = props => {
  const {
    id,
    value,
    removeNote,
    editNote,
    hashTagsList,
    changeHashTagsList
  } = props;

  const editorRef = useRef(null);
  const [editorState, changeEditorState] = useState(
    createEditorStateWithText(value)
  );
  const [noteHashTags, changeNoteHashTags] = useState([]);
  const [showDoneIcon, changeShowDoneIcon] = useState(false);

  useEffect(() => {
    const hashTags = getHashTagsFromEditorState(editorState);
    changeNoteHashTags(hashTags);
  }, []);

  const onChange = editorState => {
    const text = editorState.getCurrentContent().getPlainText();
    const hashTags = getHashTagsFromEditorState(editorState);
    if (text.slice(-1) === " " && hashTags.length > noteHashTags.length) {
      changeNoteHashTags([...new Set(hashTags)]);
    }
    if (hashTags.length < noteHashTags.length) {
      changeNoteHashTags([...new Set(hashTags)]);
    }
    changeEditorState(editorState);
  };

  const removeCard = () => {
    const hashTags = getHashTagsFromEditorState(editorState);
    const hashTagsWithoutDeleted = hashTagsList.filter(global =>
      hashTags.every(local => local !== global)
    );
    changeHashTagsList([...hashTagsWithoutDeleted]);
    removeNote({ value, id });
  };

  const saveEditedValue = () => {
    const value = editorState.getCurrentContent().getPlainText();
    editNote({ value, id });
    changeShowDoneIcon(true);
    changeHashTagsList([...getNotesForUpdate(noteHashTags, hashTagsList, "-")]);
    setTimeout(() => changeShowDoneIcon(false), 1500);
  };

  const focus = () => {
    editorRef.current.focus();
  };
  return (
    <__NoteCardWrapper__>
      <div className={"editor"} onClick={focus}>
        <Editor
          editorState={editorState}
          onChange={onChange}
          plugins={plugins}
          ref={editorRef}
        />
        <div className="icons-container">
          <img src={save} alt="" onClick={saveEditedValue} />
          <img src={del} alt="" onClick={removeCard} />
        </div>
        {showDoneIcon && <img className={"doneIcon"} src={done} alt="" />}
      </div>
      <div className="hashTag-container">
        {noteHashTags.map(item => (
          <p className={"hashtag-item"} key={nanoid()}>
            {item}
          </p>
        ))}
      </div>
    </__NoteCardWrapper__>
  );
};
