import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import { useAuth0 } from "./react-auth0-spa";
import MenuExampleSecondary from "./components/Menu"
import Journal from "./components/Journal"
import CheapSearch from "./components/CheapSearch";
import Title from "./components/Title/";
import Footer from "./components/Footer/";
import Home from "./components/Home/";

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
          <Title />
          <MenuExampleSecondary />
        </header>
        <Switch>
          <CheapSearch path="/CheapSearch" component={CheapSearch} />
          <Journal path="/Journal" component={Journal} />
          <Route path="/" component={Home} />
          <PrivateRoute path="/Profile" component={Profile} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;