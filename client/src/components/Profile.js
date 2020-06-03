// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <p></p>
      <img src={user.picture} alt="Profile" width="150px" height="150px" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p></p>
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
    </Fragment>
  );
};

export default Profile;