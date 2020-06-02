// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
// import { useAuth0 } from "./react-auth0-spa";
import MenuExampleSecondary from "./components/Menu"
import Journal from "./components/Journal"

function App() {
  // const { loading } = useAuth0();
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <MenuExampleSecondary/>
          <NavBar />
        </header>
        <Journal/>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;