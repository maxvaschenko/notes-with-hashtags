import React from "react";

export const ArticleItem = props => {
  const { article } = props;
  const { description, name, price, id } = article;
  return (
    <div className={"articles-item"} key={id}>
      <p className="name">{name}</p>
      <p className="descr">{description}</p>
      <p className="price">{price}</p>
      <button>Edit</button>
      <button>Remove</button>
    </div>
  );
};
