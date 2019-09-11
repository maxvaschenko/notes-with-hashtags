import React, { useState } from "react";

export const ArticleItem = props => {
  const { changeSingleArticle, deleteArticle } = props;
  const [article, changeArticle] = useState(props.article);
  const [isEditModeOn, switchEditMode] = useState(false);
  const { description, name, price, id } = article;
  const changeEditMode = () => {
    if (isEditModeOn) {
      changeArticle(props.article);
    }
    switchEditMode(!isEditModeOn);
  };
  const changeValue = fieldName => e => {
    const newObj = article;
    newObj[fieldName] = e.target.value;
    changeArticle({ ...newObj });
  };

  const saveArticle = () => {
    changeSingleArticle(article, changeEditMode);
  };

  const deleteItem = () => {
    deleteArticle(article);
  };
  return (
    <div className={"articles-item"} key={id}>
      {!isEditModeOn ? (
        <React.Fragment>
          <p className="name">{name}</p>
          <p className="descr">{description}</p>
          <p className="price">{price}</p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input
            className="name"
            type="text"
            name={"name"}
            value={name}
            onChange={changeValue}
          />
          <input
            className="descr"
            type="description"
            value={description}
            onChange={changeValue("description")}
          />
          <input
            className="price"
            type="text"
            name={"price"}
            value={price}
            onChange={changeValue}
          />
        </React.Fragment>
      )}

      {isEditModeOn && <button onClick={saveArticle}>Save</button>}
      <button onClick={changeEditMode}>
        {isEditModeOn ? "Cancel" : "Edit"}
      </button>
      <button onClick={deleteItem}>Remove</button>
    </div>
  );
};
