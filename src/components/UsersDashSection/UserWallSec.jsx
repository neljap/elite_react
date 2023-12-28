import { BiMoneyWithdraw } from "react-icons/bi";
import { RiRefund2Fill } from "react-icons/ri";
import BtcIcon from "../../assests/bitcoin.png";
import LiteCoin from "../../assests/litecoin.png";
import EthIcon from "../../assests/ethereum.png";
import DollIcon from "../../assests/dollar.png";
import { Link } from "react-router-dom";
import {AuthContext} from "../context/AuthContext"
import { useContext } from "react";


const UserWallSec = () => {
  const {data} = useContext(AuthContext)
  return (
    <div>
      <div className="row">
        <div>
          <div></div>
          {/* <div>
            <h4 className="text-capitalize"></h4>
            <p>{currentUser?.userData?.userEmail}</p>
          </div> */}
        </div>
        <div className="col-md-5">
          <div className="d-flex justify-content-between align-items-center p-2">
            <div>
              <h4>Account Balance</h4>
              <h2>${data?.tAmount}.00</h2>
            </div>
            <div>
              <h4>Total Profit</h4>
              <h2>${data?.tBalance}.00</h2>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-between align-items-center px-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <RiRefund2Fill size={30} />
              <p>Fund Wallet</p>
              <Link to="/user/deposit">
                <button className="btn btn-success">Proceed</button>
              </Link>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <BiMoneyWithdraw size={30} />
              <p>Withdraw</p>
              <Link to="/user/withdraw">
                <button className="btn btn-success">Proceed</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
            <div className="d-flex justify-content-center align-items-center gap-2 border border-success p-2 rounded" style={{width: '200px', height: '120px'}}>
              <img
                src={BtcIcon}
                alt=""
                style={{ width: "50px", height: "50px" }}
              />
              <div>
                <h6>Bitcoin Wallet</h6>
                <h4>${data?.tBtc}.00</h4>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-2 border border-success p-2 rounded" style={{width: '200px', height: '120px'}}>
              <img
                src={EthIcon}
                alt=""
                style={{ width: "50px", height: "50px" }}
              />
              <div>
                <h6>Ethereum Wallet</h6>
                <h4>${data?.tEth}.00</h4>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2 border border-success p-2 rounded" style={{width: '200px', height: '120px'}}>
              <img
                src={LiteCoin}
                alt=""
                style={{ width: "50px", height: "50px" }}
              />
              <div>
                <h6>Litecoin Wallet</h6>
                <h4>${data?.tLtc}.00</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWallSec;
