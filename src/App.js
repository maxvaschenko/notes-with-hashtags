import React, {Component, useEffect} from "react";
import {connect} from "react-redux";
import getAppToken from "./action/app";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./container/Home";

const App = props => {
  const {getAppToken} = props
  useEffect(() => {
    getAppToken()
  }, [])

  return (
     <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="*" render={() => (
                    <div><h1>404 Not found!</h1></div>
                )}/>
           </Switch>
     </Router>
  )
}

export default connect(null, {getAppToken})(App)
