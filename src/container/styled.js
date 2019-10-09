import styled from "styled-components";

export const __Home__ = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .wrapper {
    display: flex;
    aside {
      width: 130px;
      margin-top: 2em;
      h2 {
        margin: 0;
      }
      .sidebar-hashTag {
        background: #8f8f8f;
        border-radius: 10px;
        width: max-content;
        padding: 7px;
        color: white;
        margin-bottom: 10px;
      }
    }
  }
`;
