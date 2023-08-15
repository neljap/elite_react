import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/WebPages/HomePage";
import AboutPg from "./pages/WebPages/AboutPg";
import ContactPg from "./pages/WebPages/ContactPg";
import Packages from "./pages/WebPages/Packages";
import LoginPg from "./pages/authPages/LoginPg";
import RegisterPg from "./pages/authPages/RegisterPg";
import ForgotPasswordPg from "./pages/authPages/ForgotPasswordPg";
import ResetPassPg from "./pages/authPages/ResetPassPg";
import "bootstrap/dist/css/bootstrap.min.css"
import UserIndex from "./pages/userPages/UserIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPg />} />
        <Route path="/contact" element={<ContactPg />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/login" element={<LoginPg />} />
        <Route path="/register" element={<RegisterPg />} />
        <Route path="/forgot-password" element={<ForgotPasswordPg />} />
        <Route path="/reset-password" element={<ResetPassPg />}/>
        <Route path="/user/*" element={<UserIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
