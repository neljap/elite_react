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
      path: "/user/help",
      name: "Help",
      icon: <FaThList />,
    },
  ];
  return (
    <>
      <div className="side -container">
        <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
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
              className="link"
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
        <main className="flex flex-direction-column justify-content-center align-items-center">
          <div class="fixed mx-auto w-3/4 flex items-center justify-between h-14 text-white z-10 bg-tmColor rounded-2xl">
            <div class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
              <img
                class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
                src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
              />
              <span class="hidden md:block">ADMIN</span>
            </div>
            <div class="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
              <div className="flex items-center">
                <FaBars />
                <p>Logout</p>
              </div>
            </div>
          </div>
          {children}
        </main>
      </div>
    </>
  );
}

export default Sidebar