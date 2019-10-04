import React, { useEffect, Suspense } from "react";
import { connect } from "react-redux";
import { startApp } from "./action/app";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { GlobalStyle } from "./global";
const Home = React.lazy(
  () => import("./container/Home") /* webpackChunkName: "Home" */
);

const NotFound = () => (
  <div>
    <h1>404 Not found!</h1>
  </div>
);

const App = props => {
  const { startApp } = props;
  useEffect(() => {
    startApp();
  }, []);
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
      <GlobalStyle />
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    startApp
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
