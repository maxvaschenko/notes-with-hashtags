import { GET_ARTICLES, PUT_ARTICLE, DELETE_ARTICLE } from "../type/articles";
import { getArticles, putArticle, deleteArticleRequest } from "../utils/api";

export const getAllArticles = token => {
  return async dispatch => {
    try {
      const res = await getArticles(token);
      await dispatch({
        type: GET_ARTICLES,
        payload: [...res.data]
      });
    } catch (e) {
      console.log(e);
      //ignore
    }
  };
};

export const changeSingleArticle = (article, closeEditModeAction) => {
  return async (dispatch, getState) => {
    try {
      const {
        general: { token }
      } = getState();
      const res = await putArticle(article, token);
      await dispatch({
        type: PUT_ARTICLE,
        payload: { ...res.data }
      });
      await closeEditModeAction();
    } catch (e) {
      console.log(e);
      //ignore
    }
  };
};

export const deleteArticle = article => {
  return async (dispatch, getState) => {
    try {
      const {
        general: { token }
      } = getState();
      const res = await deleteArticleRequest(article, token);
      await dispatch({
        type: DELETE_ARTICLE,
        payload: { ...res.data }
      });
    } catch (e) {
      console.log(e);
      //ignore
    }
  };
};
