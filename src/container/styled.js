import styled from "styled-components";

export const __Home__ = styled.div`
  header {
    display: flex;
    font-size: 2em;
    font-weight: bold;
    color: #878889;
    .name {
      width: 20%;
    }
    .descr {
      width: 60%;
    }
    .price {
      width: 20%;
    }
    p {
      margin: 0;
    }
    button {
      width: 110px;
    }
  }
  .articles-item {
    display: flex;
    height: 44px;
    .name {
      width: 20%;
    }
    .descr {
      width: 60%;
    }
    .price {
      width: 20%;
    }
  }
`;
