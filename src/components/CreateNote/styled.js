import styled from "styled-components";

export const __CreateNoteWrapper__ = styled.div`
  width: 600px;
  margin-top: 1em;
  display: flex;
  align-items: center;
  .editor {
    min-height: 100px;
    max-height: 150px;
    overflow: auto;
    box-sizing: border-box;
    cursor: text;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 2em;
    box-shadow: inset 0px 1px 8px -3px #ababab;
    background: #fefefe;
  }

  .hashtag {
    color: red;
  }
  .image-container {
    width: 50px;
    img {
      width: 100%;
      height: auto;
    }
  }
`;
