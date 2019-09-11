import React, { useState } from "react";
import { connect } from "react-redux";
import { __Home__ } from "./styled";
import { Spinner } from "../components/common/Spinner";
import { ArticleItem } from "../components/TableComponents/ArticleItem";
import { changeSingleArticle, deleteArticle } from "../action/articles";
import { AddArticleModal } from "../components/AddArticleModal";

const Home = props => {
  const { articles, changeSingleArticle, deleteArticle } = props;
  const [showModal, changeShowModal] = useState(false);
  const showAddModal = () => {
    changeShowModal(true);
  };
  const hideAddModal = () => {
    changeShowModal(false);
  };
  return (
    <__Home__>
      <header>
        <p className="name">Name</p>
        <p className="descr">Description</p>
        <p className="price">Price</p>
        <button onClick={showAddModal}>Add new</button>
      </header>
      {articles && articles.length > 0 ? (
        articles.map(item => (
          <ArticleItem
            article={item}
            changeSingleArticle={changeSingleArticle}
            deleteArticle={deleteArticle}
            key={item.id}
          />
        ))
      ) : (
        <Spinner />
      )}
      {showModal && <AddArticleModal closeModal={hideAddModal} />}
    </__Home__>
  );
};

const mapStateToProps = state => ({
  articles: state.articles
});

export default connect(
  mapStateToProps,
  { changeSingleArticle, deleteArticle }
)(Home);
