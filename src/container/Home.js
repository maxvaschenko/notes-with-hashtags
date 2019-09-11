import React from "react";
import { connect } from "react-redux";
import { __Home__ } from "./styled";
import { Spinner } from "../components/common/Spinner";
import { ArticleItem } from "../components/TableComponents/ArticleItem";

const Home = props => {
  const { articles } = props;
  return (
    <__Home__>
      <header>
        <p className="name">Name</p>
        <p className="descr">Description</p>
        <p className="price">Price</p>
        <button>Add new</button>
      </header>
      {articles && articles.length > 0 ? (
        articles.map(item => <ArticleItem article={item} />)
      ) : (
        <Spinner />
      )}
    </__Home__>
  );
};

const mapStateToProps = state => ({
  articles: state.articles
});

export default connect(
  mapStateToProps,
  null
)(Home);
