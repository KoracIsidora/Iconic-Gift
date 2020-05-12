import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../Home";

const Content = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            {Home}
          </Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Content;
