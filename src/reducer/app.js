import {createReducer} from "../utils/index";
import {
    START_APP,
} from "../type/app";

const initialState = {
    loading: true,
    error: null
};

const START = (state, payload) => {
    return {
        ...state,
        loading: false,
        token: payload.token
    };
};


export default createReducer(initialState, {
    [START_APP]:START,
});
