import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { devTools } from "./utils";
import configureStore from "./store";
import App from "./App";

const Root = props => (
  <Provider store={props.store}>
    <App />
  </Provider>
);

(async function() {
  try {
    const store = await configureStore(devTools(process.env.__DEV__));
    const root = await Root({ store });
    await render(root, document.getElementById("application"));
  } catch (e) {
    console.log(e, "Application ERROR!!");
  }
})();
