import { combineReducers } from "redux";
import general from "./general";
import articles from "./articles";

const rootReducer = combineReducers({
  general,
  articles
});

export default rootReducer;
