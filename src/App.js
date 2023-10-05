import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HomePage from "./pages/WebPages/HomePage";
import AboutPg from "./pages/WebPages/AboutPg";
import ContactPg from "./pages/WebPages/ContactPg";
import Packages from "./pages/WebPages/Packages";
import "bootstrap/dist/css/bootstrap.min.css"
import FaqSecPg from "./pages/WebPages/FaqSecPg";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaWhatsapp} from 'react-icons/fa'
import AOS from "aos";
import 'aos/dist/aos.css';
import UserIndex from './pages/userPages/UserIndex'
import AuthIndex from "./pages/authPages/AuthIndex";

const WhatsLink ='https://api.whatsapp.com/send?phone=2347062181023&text=Hi%F0%9F%98%8A%2C%20I%20want%20to%20Invest%20under%20Spectrum%20Capitals%20Platform'
const WhatsLinkUs = 'https://wa.link/hgu451'
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
      <div style={{position: 'fixed', bottom: '10%', left: '5%', zIndex: '10', backgroundColor: 'green', padding: '10px', borderRadius: '50%'}}>
        <Link to={WhatsLinkUs} target="_blank" className="text-decoration-none">
          <FaWhatsapp size={32} color="white" />
        </Link>
      </div>
      <div style={{position: 'fixed', top: '10%', right: '1px', zIndex: '10', backgroundColor: 'transparent', padding: '10px', width: "200px", height: "100px"}}>
        
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPg />} />
        <Route path="/contact" element={<ContactPg />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/faq" element={<FaqSecPg />} />
        <Route path="/user/*" element={<UserIndex />} />
        <Route path="*" element={<AuthIndex />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
