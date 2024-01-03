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
import {IoLogOutSharp} from "react-icons/io5"
import { NavLink } from "react-router-dom";
import Logo from "../../assests/sclogo.png";
import '../../App.css'
import UserNavSec from "../UsersDashSection/UserNavSec";
import UserFooterCy from "../UsersDashSection/UserFooterCy";
import Cookies from "js-cookie";
import axios from "axios";
import { hosturl } from "../utils/Apis";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Button, Modal } from "react-bootstrap";

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNot, setShowNot] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate()

  const {setData} = useContext(AuthContext);

  const signOutFunc = () => {
    try{  
      Cookies.remove("token");
      setShowNot(false);
      navigate("/");
      toast.info("Log Out Successfully", {position: "bottom-left"})
    }catch(err){
      toast.error(err.code, { position: "bottom-left" });
    }
  }

  useEffect(() => {
    let cookietoken = Cookies.get("token");

    if(!cookietoken){
      navigate("/login")
    }

  }, [])

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
        <div style={{ width: "200px" }} className="sidebar d-none d-lg-block">
          <div className="top_section">
            <Link to="/">
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
          <>
            <div
              className=" d-flex justify-content-start align-items-center link"
              onClick={() => setShowNot(true)}
              style={{paddingLeft: "13px", cursor: "pointer"}}
            >
              <IoLogOutSharp size={28} color="white" />
              <p className="mt-3 font-bold">Logout</p>
            </div>
            {showNot && (
              <Modal size="sm" show={showNot} onHide={() => setShowNot(false)}>
                <Modal.Header closeButton>
                  {/* <Modal.Title>Hi {fullNameInfo} </Modal.Title> */}
                </Modal.Header>
                <Modal.Body>Do you want to Log Out?</Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={signOutFunc}>
                    Yes
                  </Button>
                  <Button variant="primary" onClick={() => setShowNot(false)}>
                    No
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
          </>
        </div>
        <div className="w-100 bg-dark text-light main-details-section">
          <UserNavSec  setShowNot={setShowNot}/>
          <main className="container w-100">{children}</main>
          <UserFooterCy />
        </div>
      </div>
    </>
  );
}

export default Sidebar