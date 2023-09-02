import { FaRegClipboard } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addressData } from "./UserInvData";
import '../../App.css'

const UserPayDataInfo = () => {
  const navigate = useNavigate()
  const {wallet} = useParams()
  const {amount} = useParams()

  const selectedAddress = addressData.find((item) => item.name === wallet)

  return (
    <div className="bg-dark ">
      <h3>Make Payment</h3>
      <div className="d-flex justify-content-between align-items-center p-3">
        <div>
          <h4>
            {selectedAddress.name}
          </h4>
          
        </div>
        <h2>${amount}</h2>
      </div>
      <div className="rounded shadow bg-dark d-flex flex-column align-items-center justify-content-center user-pay-form border border-success rounded p-3">
        <p>Scan the barcode below to make Payment</p>
        <div
          style={{ height: "200px", width: "200px", backgroundColor: "black" }}
          className="rounded"
        ></div>
        <p>Or Send $500 to the address below</p>
        <div className="d-flex">
          <input type="text" name="" value={selectedAddress.address} id="" className="w-100 rounded p-2"/>
          <div>
            <FaRegClipboard size={30} cursor="pointer" />
          </div>
        </div>
        <p>Network Type: {selectedAddress.unit}</p>
        {/* <Link to='proof'> */}
          <button className="btn btn-success" onClick={() => navigate('/user/payment/proof')}>
            Mark as Completed
          </button>
        {/* </Link> */}
        
      </div>
      
    </div>
  );
};

export default UserPayDataInfo;
