import { createReducer } from "../utils/index";
import { GET_TOKEN } from "../type/general";

const initialState = null;

const START = (state, payload) => {
  return {
    token: payload.token
  };
};

export default createReducer(initialState, {
  [GET_TOKEN]: START
});
