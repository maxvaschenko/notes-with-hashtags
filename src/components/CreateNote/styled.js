import styled from "styled-components";

export const __CreateNoteWrapper__ = styled.div`
  width: 650px;
  margin-top: 1em;
  display: flex;
  align-items: flex-start;

  .editor-hashtag-container {
    display: flex;
    flex-direction: column;
    .editor {
      min-height: 100px;
      max-height: 150px;
      overflow: auto;
      box-sizing: border-box;
      cursor: text;
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 1.5em;
      box-shadow: inset 0px 1px 8px -3px #ababab;
      background: #fefefe;
    }

    .hashtag {
      color: red;
    }
    .hashtag-container {
      display: flex;
      p {
        margin: 0;
      }
      .hashtag-item {
        background: #8f8f8f;
        border-radius: 10px;
        width: max-content;
        padding: 7px;
        color: white;
        margin-right: 10px;
      }
    }
  }
  .image-container {
    width: 50px;
    top: 40px;
    position: relative;
    img {
      width: 100%;
      height: auto;
    }
  }
`;
