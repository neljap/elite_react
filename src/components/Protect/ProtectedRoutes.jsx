import React, { useContext, useEffect } from "react";

import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const ProtectedRoutes = ({ children }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    const currentState = window.localStorage.getItem("user");

    setCurrentUser(JSON.parse(currentState));
  }, []);

  console.log('pro current', currentUser)
  if (currentUser === null) {
    return <Navigate to="/login" />;
  }
  return (<>{children}</>);
};

export default ProtectedRoutes;
