import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/loginComponents/Login";
import Register from "./Components/loginComponents/Register";
import Income_Setup from "./Components/accountCreation/Income-Setup";
import Bill_Setup from "./Components/accountCreation/Bill-Setup";
//import ProgressCircle from "./Components/ProgressCircle/ProgressCirclesContainer";
import Category_Setup from "./Components/accountCreation/Category-Setup";

export default class App extends Component {
  render() {
    if (!localStorage.getItem("userId")) {
      return (
        <Router>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
          <Redirect push to="/login" />
        </Router>
      );
    }
    return (
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/income-setup" component={Income_Setup} />
          <Route path="/bill-setup" component={Bill_Setup} />
          <Route path="/category-setup" component={Category_Setup} />
        </Switch>
      </Router>
    );
  }
}
