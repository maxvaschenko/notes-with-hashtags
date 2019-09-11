import { GET_TOKEN } from "../type/general";
import { getToken } from "../utils/api";

export const getAppToken = () => {
  return async dispatch => {
    try {
      const res = await getToken();
      await dispatch({
        type: GET_TOKEN,
        payload: {
          token: res.data.access_token
        }
      });
    } catch (e) {
      console.log(e);
      //ignore
    }
  };
};
