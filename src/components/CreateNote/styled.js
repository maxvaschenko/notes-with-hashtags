import styled from "styled-components";

export const __CreateNoteWrapper__ = styled.div`
  width: 600px;
  .input-wrapper {
    display: flex;
    align-items: center;
    border: 1px solid #c2c7cc;
    border-radius: 5px;
    .image-container {
      width: 50px;
      height: 50px;
      cursor: pointer;
      img {
        width: 100%;
        height: auto;
      }
    }
    input {
      border: none;
      outline: none;
      width: 90%;
      font-size: 1.2em;
      padding-left: 10px;
    }
  }
`;
