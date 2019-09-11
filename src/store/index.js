/**
 * @name Store
 * @info Core configuration Store!
 * @version 1.09.34
 **/

import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducer/index";

function configureStore(initialState) {
  let createStoreWithMiddleware;

  const middleware = process.env.__DEV__
    ? applyMiddleware(thunk, createLogger())
    : applyMiddleware(thunk);

  createStoreWithMiddleware = compose(middleware);

  const store = createStoreWithMiddleware(createStore)(
    rootReducer,
    initialState
  );

  if (module.hot) {
    module.hot.accept("../reducer", () => {
      const nextRootReducer = require("../reducer/index");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;
