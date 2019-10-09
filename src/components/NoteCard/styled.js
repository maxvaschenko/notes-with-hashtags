import styled from "styled-components";

export const __NoteCardWrapper__ = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  .icons-container {
    position: absolute;
    bottom: 10px;
    right: 10px;
    img {
      cursor: pointer;
    }
  }
  .doneIcon {
    position: absolute;
    top: 20px;
    right: 10px;
  }
  .editor {
    margin: 0;
    position: relative;
  }
  .hashTag-container {
    display: flex;
    margin-bottom: 1em;
    .hashtag-item {
      background: #8f8f8f;
      border-radius: 10px;
      width: max-content;
      padding: 7px;
      color: white;
      margin-right: 10px;
    }
  }
`;
