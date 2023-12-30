import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaUserXmark} from "react-icons/fa6"
import {FaUserAlt} from "react-icons/fa"

const UserHmTop = () => {
  const { data } = useContext(AuthContext);

  let dataverify = data?.verified
  const verifiedeta = () => {
    if(dataverify === true){
    return (
      <div className="d-flex gap-2">
        <p>Verified</p>
        <IoMdCheckmarkCircleOutline size={25} color="yellow"/>
        </div>
    )
  }else{
    return (
      <div className="d-flex gap-2">
        <p>Unverified</p>
        <FaUserXmark size={25} color="red" />
      </div>
    );
  }
  }
  

  return (
    <>
      <div>
        <h3>Welcome, {data?.fullname}</h3>
        <div className="d-flex gap-3 justify-content-start align-items-center">
          
          {data?.profilePics === "" ? (
          <div className="mb-3 bg-white p-3" style={{borderRadius: "50%"}}>
           <FaUserAlt size={40} color="black"/> 
          </div>
          ): ( 
          <div className="mb-3 bg-white p-2" style={{borderRadius: "50%"}}>
           <img src={data?.profilePics} alt="image" style={{width: "60px", height: "60px", borderRadius: "50%"}}/>
          </div>
          )}
          <div>
            <p>Account Plan: {data?.accountype}</p>
            {verifiedeta()}
          </div>
        </div>
        
      </div>
      <div className="row gap-3 mx-auto my-3">
        <div className="col-md-5 p-3 border border-success shadow rounded">
          <p>Accout Balance</p>
          <h2>${data?.tAmount}.00</h2>
          <div className="d-flex gap-2">
            <button className="btn btn-success">
              <Link
                to="/user/deposit"
                className="text-decoration-none text-white"
              >
                Deposit
              </Link>
            </button>
            <button className="btn btn-transparent border border-success text-light">
              <Link
                to="/user/withdraw"
                className="text-decoration-none text-white"
              >
                Withdraw
              </Link>
            </button>
          </div>
        </div>
        <div className="col-md-5 p-3 border border-success shadow rounded">
          <h2>
            Invite a Friend & get <br /> extra bonus
          </h2>
          <button className="btn btn-success">
            <Link
              to="/user/refferals"
              className="text-decoration-none text-white"
            >
              Earn more
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default UserHmTop;
