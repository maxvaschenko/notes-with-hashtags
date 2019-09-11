import React from "react";
import { connect } from "react-redux";
import { __Home__ } from "./styled";

const Home = props => {
  const { articles } = props;
  return (
    <__Home__>
      {articles && articles.length > 0 ? (
        articles.map(item => {
          const { description, name, price, id } = item;
          return (
            <div className={"articles-item"} key={id}>
              <p>{description}</p>
              <p>{name}</p>
              <p>{price}</p>
            </div>
          );
        })
      ) : (
        <div className="loader">Loading...</div>
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
