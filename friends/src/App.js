import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

import Login from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import InidividualFriend from "./components/IndividualFriend";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/friends">Friends</NavLink>
          </nav>
        </header>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/friends/:id" component={InidividualFriend} />
          <PrivateRoute path="/friends" component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
