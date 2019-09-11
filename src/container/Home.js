import React from "react";
import { connect } from "react-redux";
import { __Home__ } from "./styled";
import { Spinner } from "../components/common/Spinner";

const Home = props => {
  const { articles } = props;
  return (
    <__Home__>
      <header>
        <p className="name">Name</p>
        <p className="descr">Description</p>
        <p className="price">Price</p>
      </header>
      {articles && articles.length > 0 ? (
        articles.map(item => {
          const { description, name, price, id } = item;
          return (
            <div className={"articles-item"} key={id}>
              <p className="name">{name}</p>
              <p className="descr">{description}</p>
              <p className="price">{price}</p>
            </div>
          );
        })
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
