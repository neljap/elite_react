import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthProRoutes from "../../components/Protect/AuthProRoutes";
import LoginPg from "./LoginPg";
import RegisterPg from "./RegisterPg";
import ForgotPasswordPg from "./ForgotPasswordPg";
import ResetPassPg from "./ResetPassPg";

const AuthIndex = () => {
  return (
    <AuthProRoutes>
      <Routes>
        <Route path="/login" element={<LoginPg />} />
        <Route path="/register" element={<RegisterPg />} />
        <Route path="/forgot-password" element={<ForgotPasswordPg />} />
        <Route path="/reset-password" element={<ResetPassPg />} />
      </Routes>
    </AuthProRoutes>
  );
};

export default AuthIndex;
