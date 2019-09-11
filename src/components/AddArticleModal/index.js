import React, { useState } from "react";
import { __Modal__ } from "./styled";
import { isNumber } from "../../utils";

export const AddArticleModal = props => {
  const { closeModal, addNewArticle } = props;
  const [article, changeArticle] = useState({});
  const [error, setError] = useState(null);
  const changeValue = fieldName => e => {
    const newObj = article;
    newObj[fieldName] = e.target.value;
    changeArticle({ ...newObj });
  };

  const postArticle = () => {
    if (!isNumber(+article.price)) {
      setError("price must be a number");
    } else {
      addNewArticle(article, closeModal);
    }
  };
  return (
    <__Modal__>
      <div className="content-wrapper">
        <input
          type="text"
          placeholder={"name"}
          onChange={changeValue("name")}
        />
        <input
          type="text"
          placeholder={"description"}
          onChange={changeValue("description")}
        />
        <input
          type="text"
          placeholder={"price"}
          onChange={changeValue("price")}
        />
        {error && <span className={"error"}>{error}</span>}
        <button onClick={postArticle}>Send</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </__Modal__>
  );
};
