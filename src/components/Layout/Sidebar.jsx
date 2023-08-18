import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../../assests/sclogo.png";
import '../../App.css'
import UserNavSec from "../UsersDashSection/UserNavSec";

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
      path: "/user/investment",
      name: "Investment",
      icon: <FaRegChartBar />,
    },
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
      path: "/user/support",
      name: "Help",
      icon: <FaThList />,
    },
  ];
  return (
    <>
      <div className="sidebar-container">
        <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar d-none d-lg-block">
          <div className="top_section">
            <Link to='/'>
              <img
              src={Logo}
              style={{
                display: isOpen ? "block" : "none",
                width: "150px",
                height: "50px",
              }}
              className="logo"
              alt="image"
            />  
            </Link>
            
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link text-decoration-none"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <div className="w-100" style={{marginLeft: '300px'}}>
          <UserNavSec />
          <main className="container w-100">{children}</main>
        </div>
      </div>
    </>
  );
}

export default Sidebar