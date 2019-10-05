import React, { useState, useRef } from "react";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createHashtagPlugin from "draft-js-hashtag-plugin";
const hashtagPlugin = createHashtagPlugin({
  theme: { hashtag: "hashtag" }
});
import "./style.scss";
const plugins = [hashtagPlugin];
import nanoid from "nanoid";
import plus from "../../assets/icons/plus.png";
import { __CreateNoteWrapper__ } from "./styled";

const text = `Enter new note pls using #Hashtags`;

export const CreateNote = props => {
  const { addNote } = props;
  const editorRef = useRef(null);
  const [editorState, changeEditorState] = useState(
    createEditorStateWithText(text)
  );

  const onChange = editorState => {
    console.log(editorState.getCurrentContent().getPlainText());
    changeEditorState(editorState);
  };

  const addNoteToNoteList = () => {
    addNote({ value: editorState, id: nanoid() });
    //changeNoteValue("");
  };

  const focus = () => {
    editorRef.current.focus();
  };

  return (
    <__CreateNoteWrapper__>
      <div className={"editor"} onClick={focus}>
        <Editor
          editorState={editorState}
          onChange={onChange}
          plugins={plugins}
          ref={editorRef}
        />
      </div>
      <div className="image-container" onClick={addNoteToNoteList}>
        <img src={plus} alt="" />
      </div>
    </__CreateNoteWrapper__>
  );
};
