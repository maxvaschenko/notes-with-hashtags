import styled from "styled-components";

export const __NoteCardWrapper__ = styled.div`
  width: 600px;
  height: 108px;
  position: relative;
  display: flex;
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
`;
