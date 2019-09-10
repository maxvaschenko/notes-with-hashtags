import React, {Component, useEffect} from "react";
import {connect} from "react-redux";
import {startApp} from "./action/app";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./container/Home";

const App = props => {
  const {startApp} = props
  useEffect(() => {
    startApp()
  }, [])

  return (
     <Router>
            <Switch>
                c<Route exact path="/" component={Home}/>
                <Route path="*" render={() => (
                    <div><h1>404 Not found!</h1></div>
                )}/>
           </Switch>
     </Router>
  )
}

const mapDispatchToProps = (dispatch) => {
  return ({
    startApp
  })
}

export default connect(null, mapDispatchToProps)(App)
