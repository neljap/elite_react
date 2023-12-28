import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addressData } from "../../components/UsersDashSection/UserInvData";
import { toast } from "react-toastify";
import "../../App.css";
const UserDepositSec = () => {
  const navigate = useNavigate();

  const [amount, setAmount] = useState(0);
  const [select, setSelect] = useState("");
  const [display, setDisplay] = useState(false);

  const SelectChange = (e) => {
    setSelect(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount < 500) {
      toast.error("Amount is too low", {
        position: "bottom-left",
      });
      // alert('Amount is too low')
      return;
    } else if (select === "Select Payment Option") {
      toast.error("Please ", {
        position: "bottom-left",
      });
    }
    try {
      // alert(select)
      if (select === "Ethereum") {
        navigate(`/user/payment/Ethereum/${amount}`);
        // alert("eth");
      } else if (select === "Bitcoin") {
        navigate(`/user/payment/Bitcoin/${amount}`);
        // alert("Btc");
      } else if (select === "Litecoin") {
        navigate(`/user/payment/Litecoin/${amount}`);
        // alert("ltc");
      } else if (select === "USDT") {
        navigate(`/user/payment/USDT/${amount}`);
        // alert("usdt");
      } else {
        toast.error("Kindly Select a Payment Options", {
          position: "bottom-left",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="user-depo-top">
      <h3 className="all-subheaders text-center text-success">DEPOSIT</h3>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="font-text text-center">Choose your Prefer Option</p>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column gap-5 user-depo-form border border-success rounded"
        >
          <div>
            <label>Enter Amount</label> <br />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              name="amount"
              className="w-100 p-2 rounded"
            />
          </div>
          <select
            value={select}
            id="select"
            onChange={SelectChange}
            className="w-100 p-2 rounded"
          >
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

export default UserDepositSec;