import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAppToken } from "./action/general";
// import getAllArticles from "./action/articles.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./container/Home";

const App = props => {
  const { getAppToken, getAllArticles, token } = props;
  useEffect(() => {
    if (token == null) {
      getAppToken();
    }
    if (token) {
      // getAllArticles(token)
    }
  }, [token]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="*"
          render={() => (
            <div>
              <h1>404 Not found!</h1>
            </div>
          )}
        />
      </Switch>
    </Router>
  );
};

const mapStateToProps = state => ({
  token: state.token
});

export default connect(
  mapStateToProps,
  { getAppToken }
)(App);
