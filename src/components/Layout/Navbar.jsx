import Logo from "../../assests/logosc.png";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import "../../App.css";
import { useRef } from "react";
import { useState, useEffect } from "react";
// import { useContext } from "react";
// import { UserContext } from "../../context/UserContext";

const Navbar = () => {
  const NavRef = useRef();
  // const { currentUser, setCurrentUser, userDataInfo } = useContext(UserContext);
  const [navbarHan, setNavbarHan] = useState(false);

  // useEffect(() => {
  //   const currentState = window.localStorage.getItem("user");

  //   setCurrentUser(currentState);
  // }, []);

  const showNavRef = () => {
    NavRef.current.classList.toggle("switch");
  };

  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 80) {
      setNavbarHan(true);
    } else {
      setNavbarHan(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={
        navbarHan
          ? "d-flex justify-content-between align-items-center py-2 px-3 nav-active"
          : "d-flex justify-content-between align-items-center py-2 px-3 bg-transparent"
      }
    >
      <Link
        to="/"
        className="d-flex justify-content-center align-items-center text-decoration-none"
      >
        <div style={{ width: "50px", height: "50px" }}>
          <img src={Logo} alt="img" className="w-100" />
        </div>
        <div>
          <span className="text-white font-weight-bold">Spectrum</span>
          <br />
          <span className="text-success font-weight-bold">Capitals</span>
        </div>
      </Link>

      <nav ref={NavRef} className="nav-mob-div">
        <Link
          to="/about"
          className="text-white text-decoration-none ml-3"
          onClick={showNavRef}
        >
          About
        </Link>
        <Link
          to="/packages"
          className="text-white text-decoration-none ml-3"
          onClick={showNavRef}
        >
          Packages
        </Link>
        <Link
          to="/contact"
          className="text-white text-decoration-none ml-3"
          onClick={showNavRef}
        >
          Contact Us
        </Link>
        <Link to="/faq" className="text-white text-decoration-none ml-3">
          FAQ
        </Link>
        <div className="nav-btn-mob">
            <div className="d-flex gap-4">
              <Link to="/login">
                <button className="btn btn-success" onClick={showNavRef}>
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-success" onClick={showNavRef}>
                  Register
                </button>
              </Link>
            </div>
        </div>
        <FaTimes
          color="white"
          className="nav-icon-mob times-icon"
          size={25}
          onClick={showNavRef}
        />
      </nav>
      <div className="nav-btn-desk">
          <div className="d-flex gap-4">
            <Link to="/login">
              <button className="btn btn-success" onClick={showNavRef}>
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-success" onClick={showNavRef}>
                Register
              </button>
            </Link>
          </div>
        {/* ) : (
          <Link to="/user/home">
            <button className="btn btn-success">{userDataInfo.fullname}</button>
          </Link>
        )} */}
      </div>
      <FaBars
        color="white"
        className="nav-icon-mob"
        size={25}
        onClick={showNavRef}
      />
    </div>
  );
};

export default Navbar;
