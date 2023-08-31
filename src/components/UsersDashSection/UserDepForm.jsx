import React, { useState } from "react";
import BtcImg from "../../assests/bitcoin.png";
import LtcImg from "../../assests/litecoin.png";
import EthImg from "../../assests/ethereum.png";
import UtImg from "../../assests/dollar.png";
import { useNavigate } from "react-router-dom";
import { addressData } from "./UserInvData";
import DepoPay from "./models/DepoPay";
import { toast } from "react-toastify";
const UserDepForm = () => {
  const navigate = useNavigate();
  // const [DepData, setDepData] =  useState({
  //     amount: '',
  //     currency: ''
  // })
  const [amount, setAmount] = useState(0);
  const [select, setSelect] = useState('');
  const [display, setDisplay] = useState(false);

  const SelectChange = (e) => {
    setSelect(e.target.value);
  };

  // const openModal =() => {
  //     setDisplay(true)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount < 500){
      toast.error('Amount is too low', {
        position: 'bottom-left'
      })
      // alert('Amount is too low')
      return;
    }
    try {
        // alert(select)
      if (select === "ethereum") {
        navigate(`/user/payment/ethereum/${amount}`)
        // alert("eth");
      } else if (select === "bitcoin") {
        navigate(`/user/payment/bitcoin/${amount}`)
        // alert("Btc");
      } else if (select === "litecoin") {
        navigate(`/user/payment/litecoin/${amount}`)
        // alert("ltc");
      } else if (select === "usdt") {
        navigate(`/user/payment/usdt/${amount}`)
        // alert("usdt");
      } else {
        toast.error('No Address')
        // alert("No address");
      }
      {display && <DepoPay closedModal={setDisplay(true)}  />}
      // console.log(DepData)
      // navigate('/user/payment')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h3>DEPOSIT</h3>
      <div>
        <p>Choose your Prefer Option</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Enter Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              name="amount"
            />
          </div>
          <select value={select} id="select" onChange={SelectChange}>
            {addressData.map((option) => (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <button className="btn btn-success" type="submit">
            Proceed to Payment
          </button>
          {/* <DepoPay /> */}
          {/* {display && <DepoPay closedModal={setDisplay}  />} */}
        </form>
      </div>
    </div>
  );
};

export default UserDepForm;
