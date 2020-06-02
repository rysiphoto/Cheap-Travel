// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";


const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      {isAuthenticated && (
        <span>
           &nbsp;&nbsp;&nbsp;&nbsp;Welcome, {user.nickname}
          <Link to="/">&nbsp;&nbsp;&nbsp;&nbsp;Home</Link>&nbsp;
          <Link to="/Profile">&nbsp;&nbsp;&nbsp;&nbsp;Profile</Link>
          <Link to="/Journal">&nbsp;&nbsp;&nbsp;&nbsp;Journal</Link>
          <Link to="/CheapFlights">&nbsp;&nbsp;&nbsp;&nbsp;Cheap Flights</Link>
          
        </span>
      )}

      
    </div>
  );
};

export default NavBar;