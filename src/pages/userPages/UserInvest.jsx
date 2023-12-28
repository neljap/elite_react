import IvImg from "../../assests/invest.png";
import "../../App.css";

const UserInvest = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="mx-auto">
          <div className="user-invest-sec">
            <img src={IvImg} alt="img" className="w-100" />
          </div>
          <p>
            No active event was found in your account, Kindly click the button
            to get started
          </p>
          <button className="btn btn-success">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default UserInvest;
