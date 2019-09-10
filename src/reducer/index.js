import {combineReducers} from "redux";
import app from "./app"
import articles from "./articles"

const rootReducer = combineReducers({
    app,
    articles
});

export default rootReducer;
