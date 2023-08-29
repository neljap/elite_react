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
import { FaWhatsapp} from 'react-icons/fa'
import AOS from "aos";
import 'aos/dist/aos.css';
import UserIndex from './pages/userPages/UserIndex'

const WhatsLink ='https://api.whatsapp.com/send?phone=2347062181023&text=Hi%F0%9F%98%8A%2C%20I%20want%20to%20Invest%20under%20Spectrum%20Capitals%20Platform'

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
      <div style={{position: 'fixed', bottom: '25%', right: '5%', zIndex: '10', backgroundColor: 'green', padding: '10px', borderRadius: "50%"}}>
        <Link to={WhatsLink} target="_blank" className="text-decoration-none">
          <FaWhatsapp size={35} color="white" />
        </Link>
        
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
        <Route path="/user/*" element={<UserIndex />} />

      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
