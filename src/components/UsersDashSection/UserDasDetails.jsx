import { Link } from "react-router-dom";
import {GiProfit} from 'react-icons/gi'
import {AiOutlineGift} from 'react-icons/ai'
import {BiMoneyWithdraw} from 'react-icons/bi'
import {BsPersonAdd} from 'react-icons/bs'
import {RiRefund2Fill} from 'react-icons/ri'
import "../../App.css";
import { FaWallet } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
const UserDasDetails = () => {
  // const user = auth.currentUser
  const {currentUser} = useContext(UserContext)

  const tBal = currentUser?.userData?.totalDeposit
  const tWithDraw = currentUser?.userData?.totalWithdraw
  const tRefer = currentUser?.userData?.totalRefferals
  const tBonus = currentUser?.userData?.tBonus
  const tProfit = currentUser?.userData?.totalProfit
  const tAmount = currentUser?.userData?.totalAmount

  return (
    <div className="row gap-3 gap-md-5 mx-auto mt-5">
      <div className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded" style={{backgroundColor: '#2A3042'}}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>Account Balance</h5> <FaWallet size={40} />
        </div>
        <h2>${tAmount}.00</h2>
        {/* <Link to="/user/deposit" className="text-success text-decoration-none">
          Deposit - Transfer
        </Link> */}
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded" style={{backgroundColor: '#2A3042'}}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>Total Profit</h5> <GiProfit size={40} />
        </div>
        <h2>${tProfit}.00</h2>
        {/* <Link to="/user/deposit" className="text-success text-decoration-none">
          Deposit - Transfer
        </Link> */}
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded" style={{backgroundColor: '#2A3042'}}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>Total Bonus</h5> <AiOutlineGift size={40} />
        </div>
        <h2>${tBonus}.00</h2>
        {/* <Link to="/user/deposit" className="text-success text-decoration-none">
          Deposit - Transfer
        </Link> */}
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded" style={{backgroundColor: '#2A3042'}}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>TOTAL WITHDRAWAL</h5> <BiMoneyWithdraw size={40} />
        </div>
        <h2>${tWithDraw}.00</h2>
        {/* <Link to="/user/deposit" className="text-success text-decoration-none">
          Deposit - Transfer
        </Link> */}
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded" style={{backgroundColor: '#2A3042'}}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>REFERRALS</h5> <BsPersonAdd size={40} />
        </div>
        <h2>{tRefer}</h2>
        {/* <Link to="/user/deposit" className="text-success text-decoration-none">
          Deposit - Transfer
        </Link>  */}
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded" style={{backgroundColor: '#2A3042'}}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>TOTAL DEPOSIT</h5> <RiRefund2Fill size={40} />
        </div>
        <h2>${tBal}.00</h2>
        {/* <Link to="/user/deposit" className="text-success text-decoration-none">
          Deposit - Transfer
        </Link> */}
      </div>
    </div>
  );
};

export default UserDasDetails;
