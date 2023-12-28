import { Link } from "react-router-dom";
import { GiProfit } from "react-icons/gi";
import { AiOutlineGift } from "react-icons/ai";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsPersonAdd } from "react-icons/bs";
import { RiRefund2Fill } from "react-icons/ri";
import "../../App.css";
import { FaWallet } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const UserDasDetails = () => {
  const { data } = useContext(AuthContext);

  return (
    <>
      <div>
        <h3>Welcome, {data?.fullname}</h3>
      </div>
      <div className="row gap-3 gap-md-5 mx-auto mt-5">
        <div
          className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded"
          style={{ backgroundColor: "#2A3042" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h5>Account Balance</h5> <FaWallet size={40} />
          </div>
          <h2>${data?.tAmount}.00</h2>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded"
          style={{ backgroundColor: "#2A3042" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h5>Total Profit</h5> <GiProfit size={40} />
          </div>
          <h2>${data?.tProfit}.00</h2>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded"
          style={{ backgroundColor: "#2A3042" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h5>Total Bonus</h5> <AiOutlineGift size={40} />
          </div>
          <h2>${data?.tBonus}.00</h2>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded"
          style={{ backgroundColor: "#2A3042" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h5>TOTAL WITHDRAWAL</h5> <BiMoneyWithdraw size={40} />
          </div>
          <h2>${data?.twithd}.00</h2>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded"
          style={{ backgroundColor: "#2A3042" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h5>REFERRALS</h5> <BsPersonAdd size={40} />
          </div>
          <h2 className="text-center">{data?.tRefer}</h2>
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded"
          style={{ backgroundColor: "#2A3042" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h5>TOTAL DEPOSIT</h5> <RiRefund2Fill size={40} />
          </div>
          <h2>${data?.tBalance}.00</h2>
        </div>
      </div>
    </>
  );
};

export default UserDasDetails;
