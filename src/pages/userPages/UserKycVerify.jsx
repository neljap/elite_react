import { Link } from "react-router-dom";
import KycDa from "../../assests/kyc.jpg";

const UserKycVerify = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column gap-3 mt-3">
      <img src={KycDa} alt="" width={300} height={300} className="rounded" />
      <p>
        With tier verification you stand a chance to increase your daily
        withdrawal limit.
      </p>
      <p>
        We encourage you to upload a clear and standard version of your
        preferred document
      </p>
      <Link to="/user/kyc-data">
        <button className="btn btn-success">Click here for Verification</button>
      </Link>
    </div>
  );
};

export default UserKycVerify;
