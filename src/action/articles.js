import { GET_ARTICLES } from "../type/articles";
import { getArticles } from "../utils/api";

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
