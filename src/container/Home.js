import React, {Component} from "react";
import {connect} from "react-redux";
import {__Home__} from "./styled";

const Home = props => {
  const {articles} = props
    return (
        <__Home__>
           {articles && articles.length && articles.map(item => {
             const {created_at, description, id, name, price, status, updated_at} = item
             return(
               <div>
                <p>{created_at}</p>
                <p>{description}</p>
                <p>{id}</p>
                <p>{name}</p>
                <p>{price}</p>
                <p>{status}</p>
                <p>{updated_at}</p>
               </div>
             )
           })}
        </__Home__>
    )
}

const mapStateToProps = state => ({
  articles: state.articles
})

export default connect(mapStateToProps, null)(Home)
