// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import { useAuth0 } from "./react-auth0-spa";
import MenuExampleSecondary from "./components/Menu"
import Journal from "./components/Journal"
import CheapSearch from "./components/CheapSearch";

function App() {
  const { loading } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <MenuExampleSecondary/>
          <NavBar />
        </header>
        <Switch>
        <CheapSearch path="/CheapFlights" component={CheapSearch} />
        
        <Journal path="/Journal" component={Journal}/>
          <Route path="/" exact />
          <PrivateRoute path="/Profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;