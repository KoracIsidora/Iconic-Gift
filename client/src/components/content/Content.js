import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../Home";
import Contact from "../Contact";
import GiftList from "../Gift";

const Content = ({ setUser, user, logedIn }) => {
  if (logedIn) {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route
              path="/giftlist"
              component={(props) => (
                <GiftList setUser={setUser} {...props} user={user}></GiftList>
              )}
            ></Route>
            <Route
              path="/login"
              component={(props) => (
                <Login setUser={setUser} {...props} logedIn={logedIn}></Login>
              )}
            ></Route>
            <Route
              path="/register"
              component={(props) => <Register setUser={setUser} {...props} />}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/giftlist"
            component={(props) => (
              <GiftList setUser={setUser} {...props} user={user}></GiftList>
            )}
          ></Route>
          <Route exact path="/" component={Home}>
            {Home}
          </Route>
          <Route
            path="/login"
            component={(props) => <Login setUser={setUser} {...props}></Login>}
          ></Route>
          <Route
            path="/register"
            component={(props) => <Register setUser={setUser} {...props} />}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Content;
