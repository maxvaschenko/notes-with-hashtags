import React, { useState, useRef, useEffect } from "react";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createHashtagPlugin from "draft-js-hashtag-plugin";
import save from "../../assets/icons/save.svg";
import del from "../../assets/icons/del.svg";
import done from "../../assets/icons/done.svg";
import { __NoteCardWrapper__ } from "./styled";
const hashtagPlugin = createHashtagPlugin({
  theme: { hashtag: "hashtag" }
});
const plugins = [hashtagPlugin];

export const NoteCard = props => {
  const { id, value, removeNote, editNote } = props;
  const editorRef = useRef(null);
  const [editorState, changeEditorState] = useState(
    createEditorStateWithText(value)
  );
  const [noteHashTags, changeNoteHashTags] = useState([]);
  const [showDoneIcon, changeShowDoneIcon] = useState(false);
  useEffect(() => {
    const hashTags =
      value.match(/(^|\B)#(?![0-9_]+\b)([a-zA-Z0-9_]{1,30})(\b|\r)/g) || [];
    changeNoteHashTags(hashTags);
  }, [value]);
  const onChange = editorState => {
    changeEditorState(editorState);
  };

  const removeCard = () => {
    const value = editorState.getCurrentContent().getPlainText();
    removeNote({ value, id });
  };

  const saveEditedValue = () => {
    const value = editorState.getCurrentContent().getPlainText();
    editNote({ value, id });
    changeShowDoneIcon(true);
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
      </div>
      {showDoneIcon && <img className={"doneIcon"} src={done} alt="" />}
      <div className="hashTag-container">
        {noteHashTags.map(item => (
          <p className={"hashtag-item"}>{item}</p>
        ))}
      </div>
    </__NoteCardWrapper__>
  );
};
