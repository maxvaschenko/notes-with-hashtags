import { createReducer } from "../utils/index";
import { GET_ARTICLES } from "../type/articles";

const initialState = [];

const getArticlesReducer = (state, payload) => {
  return [...payload];
};

export default createReducer(initialState, {
  [GET_ARTICLES]: getArticlesReducer
});
