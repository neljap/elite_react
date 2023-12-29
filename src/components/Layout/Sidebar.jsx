import { useEffect, useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaWallet
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../../assests/sclogo.png";
import '../../App.css'
import UserNavSec from "../UsersDashSection/UserNavSec";
import UserFooterCy from "../UsersDashSection/UserFooterCy";
import Cookies from "js-cookie";
import axios from "axios";
import { hosturl } from "../utils/Apis";
import { AuthContext } from "../context/AuthContext";

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate()

  const {setData} = useContext(AuthContext);

  useEffect(() => {
    let cookietoken = Cookies.get("token");

    if(!cookietoken){
      navigate("/login")
    }

  }, [])
  //   const token = Cookies.get("token"); // => 'value'
  //   let config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   const getUserDetails = async () => {
  //     await axios
  //       .get(`${hosturl}/api/user/getuser`, config)
  //       .then((res) => {
  //         setData(res?.data);
  //       })
  //       .catch((err) => console.log(err.response.data));
  //   };
  //   getUserDetails();
  // }, []);

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
    {
      path: "/user/settings",
      name: "Settings",
      icon: <FaShoppingBag />,
    },
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
    <>
      <div className="sidebar-container">
        <div style={{ width:  "200px" }} className="sidebar d-none d-lg-block">
          <div className="top_section">
            <Link to='/'>
              <img
              src={Logo}
              style={{
                // display: isOpen ? "block" : "none",
                width: "150px",
                height: "50px",
              }}
              className="logo"
              alt="image"
            />  
            </Link>
            
            <div
              // style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              {/* <FaBars onClick={toggle} /> */}
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link text-decoration-none"
              // activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                // style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <div className="w-100 bg-dark text-light main-details-section">
          <UserNavSec />
          <main className="container w-100">{children}</main>
          <UserFooterCy />
        </div>
      </div>
    </>
  );
}

export default Sidebar