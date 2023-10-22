import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const UserHmTop = () => {
  const {currentUser} = useContext(UserContext)

  const tFunds = currentUser?.userData?.totalAmount
  return (
    <div className="row gap-3 mx-auto my-3">
      <div className="col-md-5 p-3 border border-success shadow rounded">
        <p>Accout Balance</p>
        <h2>${tFunds}.00</h2>
        <div className="d-flex gap-2">
          <button className="btn btn-success">
            <Link to="/user/deposit" className="text-decoration-none text-white">Deposit</Link>
          </button>
          <button className="btn btn-transparent border border-success text-light">
            <Link to="/user/withdraw" className="text-decoration-none text-white">Withdraw</Link>
          </button>
        </div>
      </div>
      <div className="col-md-5 p-3 border border-success shadow rounded">
        <h2>
          Invite a Friend & get <br /> extra bonus
        </h2>
        <button className="btn btn-success">
          <Link to='/user/refferals' className="text-decoration-none text-white">
            Earn more
          </Link>
          </button>
      </div>
    </div>
  );
};

export default UserHmTop;
