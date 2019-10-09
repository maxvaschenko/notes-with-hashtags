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
import { getHashTagsFromEditorState, mergeDedupe } from "../../utils";

const text = `Enter new note pls using #Hashtags`;

export const CreateNote = props => {
  const { addNote, hashTagsList, changeHashTagsList } = props;
  const editorRef = useRef(null);
  const [editorState, changeEditorState] = useState(
    createEditorStateWithText(text)
  );
  const [newNoteHashTags, changeNewNoteHashTags] = useState([]);

  const onChange = editorState => {
    const value = editorState.getCurrentContent().getPlainText();
    const hashTags = getHashTagsFromEditorState(editorState);
    if (value.slice(-1) === " " && hashTags.length > newNoteHashTags.length) {
      changeNewNoteHashTags([...new Set(hashTags)]);
    }
    if (hashTags.length < newNoteHashTags.length) {
      changeNewNoteHashTags([...new Set(hashTags)]);
    }
    changeEditorState(editorState);
  };

  const addNoteToNoteList = () => {
    const value = editorState.getCurrentContent().getPlainText();
    addNote({
      value,
      id: nanoid()
    });
    changeHashTagsList(mergeDedupe([...newNoteHashTags, ...hashTagsList]));
    changeNewNoteHashTags([]);
    changeEditorState(createEditorStateWithText(""));
  };

  const focus = () => {
    editorRef.current.focus();
  };
  return (
    <__CreateNoteWrapper__>
      <div className="editor-hashtag-container">
        <div className={"editor"} onClick={focus}>
          <Editor
            editorState={editorState}
            onChange={onChange}
            plugins={plugins}
            ref={editorRef}
          />
        </div>
        <div className="hashtag-container">
          {newNoteHashTags.map(item => (
            <p key={nanoid()} className={"hashtag-item"}>
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="image-container" onClick={addNoteToNoteList}>
        <img src={plus} alt="" />
      </div>
    </__CreateNoteWrapper__>
  );
};
