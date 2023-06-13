import React from "react";
import { useAuth } from "../services/AuthProvider";
const Profile = () => {
  const { user, logout } = useAuth();
  const logoutHandler = () => {
    logout();
  };
  return (
    <>
      <h1>Welcome {user.username}</h1>
      <button type="submit" onClick={logoutHandler}>
        Logout
      </button>
    </>
  );
};

export default Profile;
