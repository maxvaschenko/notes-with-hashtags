import styled from "styled-components";

export const __Modal__ = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  background: rgba(35, 35, 35, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  .content-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    padding: 2em;
    background: #e6e6e6;
    border-radius: 5px;
    input {
      margin-bottom: 1em;
    }
    .error {
      font-size: 0.8em;
      margin-bottom: 1em;
      color: red;
    }
  }
`;
