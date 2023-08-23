import React from 'react';

import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes({children}) {
    if(localStorage.getItem("isUserAuthenticated") == "false"){ 
        return <Navigate to="/login"/>
    }
  return children;
}
