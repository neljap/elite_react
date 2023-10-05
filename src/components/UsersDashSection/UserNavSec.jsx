import { useRef } from "react";
import Logo from "../../assests/logosc.png";
import { NavLink, Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaThList,
  FaCommentAlt,
  FaShoppingBag,
  FaUserAlt,
  FaRegChartBar,
  FaWallet,
  FaTh,
} from "react-icons/fa";
import "../../App.css";

const UserNavSec = () => {
  const NavRef = useRef();

  const showNavRef = () => {
    NavRef.current.classList.toggle("switch");
  };

  const menuItem = [
    {
      path: "/user/home",
      name: "Home",
      icon: <FaTh />,
    },
    {
      path: "/user/overview",
      name: "Overview",
      icon: <FaUserAlt />,
    },
    {
      path: "/user/my-wallet",
      name: "Wallet",
      icon: <FaWallet />
    },
    // {
    //   path: "/user/investment",
    //   name: "Investment",
    //   icon: <FaRegChartBar />,
    // }, 
    {
      path: "/user/refferals",
      name: "Refferals",
      icon: <FaCommentAlt />,
    },
    // {
    //   path: "/user/settings",
    //   name: "Settings",
    //   icon: <FaShoppingBag />,
    // },
    {
      path: "/user/kyc-verify",
      name: "KYC Verification",
      icon: <FaThList />,
    },
    {
      path: "/user/support",
      name: "Help",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="user-nav-top d-flex d-lg-none justify-content-between align-items-center px-3 px-md-5 py-3 bg-dark w-100">
      <div>
        <Link
          to="/"
          className="d-flex justify-content-center align-items-center text-decoration-none"
        >
          <div style={{ width: "50px", height: "50px" }}>
            <img src={Logo} alt="imag" className="w-100" />
          </div>
          <div>
            <span className="text-white font-weight-bold">Spectrum</span>
            <br />
            <span className="text-success font-weight-bold">Capitals</span>
          </div>
        </Link>
      </div>

      <nav className="nav-links-mob" ref={NavRef} >
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="text-decoration-none text-white"
            // activeclassName="active"
            onClick={showNavRef}
          >
            {/* <div className="icon">{item.icon}</div> */}
            <div
              //   style={{ display: isOpen ? "block" : "none" }}
              className="text-decoration-none text-white"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <FaTimes color="white" className="nav-times-mob" size={25} onClick={showNavRef} />
      </nav>
      <FaBars color="white" size={25} onClick={showNavRef}/>
    </div>
  );
};

export default UserNavSec;
