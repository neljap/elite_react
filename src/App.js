import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/WebPages/HomePage";
import AboutPg from "./pages/WebPages/AboutPg";
import ContactPg from "./pages/WebPages/ContactPg";
import Packages from "./pages/WebPages/Packages";
import LoginPg from "./pages/authPages/LoginPg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPg />} />
        <Route path="/contact" element={<ContactPg />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/login" element={<LoginPg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
