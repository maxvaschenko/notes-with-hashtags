import styled from "styled-components";

export const __NoteCardWrapper__ = styled.div`
  width: 600px;
  height: 108px;
  border: 1px solid #c2c7cc;
  border-radius: 5px;
  margin-bottom: 1em;
  p {
    margin: 0;
  }
  .icons-container {
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    img {
      cursor: pointer;
      margin-left: 5px;
    }
  }
  textarea {
    width: 100%;
    height: 66%;
    resize: none;
    outline: none;
    border: none;
  }
  textarea::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  textarea::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  textarea::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.34);
  }
`;
