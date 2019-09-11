import { createReducer } from "../utils/index";
import { GET_ARTICLES, PUT_ARTICLE } from "../type/articles";

const initialState = [];

const getArticlesReducer = (state, payload) => {
  return [...payload];
};

const putArticleReducer = (state, payload) => {
  const oldIndex = state.findIndex(item => item.id === payload.id);
  return [...state.slice(0, oldIndex), payload, ...state.slice(oldIndex + 1)];
};

export default createReducer(initialState, {
  [GET_ARTICLES]: getArticlesReducer,
  [PUT_ARTICLE]: putArticleReducer
});
