import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HomePage from "./pages/WebPages/HomePage";
import AboutPg from "./pages/WebPages/AboutPg";
import ContactPg from "./pages/WebPages/ContactPg";
import Packages from "./pages/WebPages/Packages";
import LoginPg from "./pages/authPages/LoginPg";
import RegisterPg from "./pages/authPages/RegisterPg";
import ForgotPasswordPg from "./pages/authPages/ForgotPasswordPg";
import ResetPassPg from "./pages/authPages/ResetPassPg";
import "bootstrap/dist/css/bootstrap.min.css"
import FaqSecPg from "./pages/WebPages/FaqSecPg";
import Example from "./pages/store_example";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AOS from "aos";
import 'aos/dist/aos.css';

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the d
      });


function App() {
  return (
    <BrowserRouter>
      <div style={{position: 'fixed', top: '50%', right: '10%'}}>
        <Link to='/user/home'>Dashboard</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPg />} />
        <Route path="/contact" element={<ContactPg />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/faq" element={<FaqSecPg />} />
        <Route path="/login" element={<LoginPg />} />
        <Route path="/register" element={<RegisterPg />} />
        <Route path="/forgot-password" element={<ForgotPasswordPg />} />
        <Route path="/reset-password" element={<ResetPassPg />}/>
        <Route path="/test" element={<Example/>}/>
        

      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
