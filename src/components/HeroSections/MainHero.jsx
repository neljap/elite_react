import Navbar from "../Layout/Navbar";
import "../../App.css";
import HeroImg from "../../assests/heroTr.jpg";
import { Link } from "react-router-dom";

const MainHero = () => {
  return (
    <div className="mainhero-container w-100">
        <Navbar />
        <div className="hero-amm-container container">
          <div className="details">
          <h1 className="text-white font-bold all-headers">
              Invest Your <br /> Money With Higher Return
            </h1>
            <p className="text-white text-semibold">
              Anyone can invest money to different currency to increase their
              earnings by the help of Bitrader through online.
            </p>
            <button className="btn btn-success">
              <Link to="/register" className="text-decoration-none text-white">
                Get Started
              </Link>
            </button>
          </div>
          <div className="image">
            <img src={HeroImg} alt="image" className="w-100 rounded"/>
          </div>
        </div>
        
    </div>
  );
};

export default MainHero;
