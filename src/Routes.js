import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signin" component={SignInPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
