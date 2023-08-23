import { Link } from "react-router-dom";
import "../../App.css";
import { FaWallet } from "react-icons/fa";
const UserDasDetails = () => {
  return (
    <div className="row gap-3 gap-md-5 mx-auto mt-5">
      <div className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded" style={{backgroundColor: '#2A3042'}}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>Account Balance</h5> <FaWallet size={25} />
        </div>
        <h1>$12.00</h1>
        <Link to="/user/deposit" className="text-success text-decoration-none">
          Deposit - Transfer
        </Link>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded" style={{backgroundColor: '#2A3042'}}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>Total Profit</h5> <FaWallet size={25} />
        </div>
        <h1>$0.00</h1>
        <Link to="/user/deposit" className="text-success text-decoration-none">
          Deposit - Transfer
        </Link>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded" style={{backgroundColor: '#2A3042'}}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>Total Bonus</h5> <FaWallet size={25} />
        </div>
        <h1>$0.00</h1>
        <Link to="/user/deposit" className="text-success text-decoration-none">
          Deposit - Transfer
        </Link>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded" style={{backgroundColor: '#2A3042'}}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>TOTAL WITHDRAWAL</h5> <FaWallet size={25} />
        </div>
        <h1>$0.00</h1>
        <Link to="/user/deposit" className="text-success text-decoration-none">
          Deposit - Transfer
        </Link>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded" style={{backgroundColor: '#2A3042'}}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>REFERRALS</h5> <FaWallet size={25} />
        </div>
        <h1>0</h1>
        <Link to="/user/deposit" className="text-success text-decoration-none">
          Deposit - Transfer
        </Link>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded" style={{backgroundColor: '#2A3042'}}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>MANAGED ACCOUNTS</h5> <FaWallet size={25} />
        </div>
        <h1>0</h1>
        <Link to="/user/deposit" className="text-success text-decoration-none">
          Deposit - Transfer
        </Link>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded" style={{backgroundColor: '#2A3042'}}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>Account Balance</h5> <FaWallet size={25} />
        </div>
        <h1>$12.00</h1>
        <Link to="/user/deposit" className="text-success text-decoration-none">
          Deposit - Transfer
        </Link>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 p-3 user-dash-box text-light border border-success rounded" style={{backgroundColor: '#2A3042'}}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>Account Balance</h5> <FaWallet size={25} />
        </div>
        <h1>$12.00</h1>
        <Link to="/user/deposit" className="text-success text-decoration-none">
          Deposit - Transfer
        </Link>
      </div>
    </div>
  );
};

export default UserDasDetails;
