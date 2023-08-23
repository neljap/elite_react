import {
  FaClipboard
} from "react-icons/fa";

const UseReferSect = () => {
  return (
    <div className="bg-dark text-light">
      <h2>REFFERALS</h2>
      <div className="container">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="col-md-3" >
          <p>
            Make extra income by reffering your family and friends. We pay you
            commissions for every signup that comes via your referral link.
          </p>
          
          <input type="text" />
          <FaClipboard />
        </div>
        <div className="col-md-4 p-3 border border-success rounded" style={{backgroundColor: '#2A3042'}}>
          <h4>Total Referral</h4>
          <h1>0</h1>
        </div>
        <div className="col-md-4 p-3 border border-success rounded" style={{backgroundColor: '#2A3042'}}>
          <h4>Active Referral</h4>
          <h1>0</h1>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default UseReferSect;
