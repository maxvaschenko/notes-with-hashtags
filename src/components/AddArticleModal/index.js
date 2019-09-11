import React from "react";
import { __Modal__ } from "./styled";

export const AddArticleModal = props => {
  const { closeModal } = props;
  return (
    <__Modal__>
      <div className="content-wrapper">
        <input type="text" placeholder={"name"} />
        <input type="text" placeholder={"description"} />
        <input type="text" placeholder={"price"} />
        <button>Send</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </__Modal__>
  );
};
