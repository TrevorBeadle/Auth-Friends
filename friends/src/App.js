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
          <PrivateRoute path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
