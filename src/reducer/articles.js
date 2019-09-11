import { createReducer } from "../utils/index";
import {
  DELETE_ARTICLE,
  GET_ARTICLES,
  POST_ARTICLE,
  PUT_ARTICLE
} from "../type/articles";

const initialState = [];

const getArticlesReducer = (state, payload) => {
  return [...payload.filter(item => item.status !== 0)];
};

const putArticleReducer = (state, payload) => {
  const oldIndex = state.findIndex(item => item.id === payload.id);
  return [...state.slice(0, oldIndex), payload, ...state.slice(oldIndex + 1)];
};

const deleteArticleReducer = (state, payload) => {
  const oldIndex = state.findIndex(item => item.id === payload.id);
  return [...state.slice(0, oldIndex), ...state.slice(oldIndex + 1)];
};

const postArticleReducer = (state, payload) => {
  return [payload, ...state];
};

export default createReducer(initialState, {
  [GET_ARTICLES]: getArticlesReducer,
  [PUT_ARTICLE]: putArticleReducer,
  [DELETE_ARTICLE]: deleteArticleReducer,
  [POST_ARTICLE]: postArticleReducer
});
