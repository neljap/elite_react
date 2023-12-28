import { FaRegClipboard } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addressData } from "./UserInvData";
import {CopyToClipboard} from "react-copy-to-clipboard"
import '../../App.css'
import { toast } from "react-toastify";
import { useState } from "react";

const UserPayDataInfo = () => {
  const navigate = useNavigate()
  const {wallet} = useParams()
  const {amount} = useParams()

  const [copied, setCopied] = useState(false)

  const selectedAddress = addressData.find((item) => item.name === wallet)

  // const copyToClipBoard = () => {
  //   CopyToClipboard(selectedAddress.address)
  //   toast.success('Copied')
  // }


  return (
    <div className="bg-dark ">
      <h3 className="all-subheaders text-center text-success">Make Payment</h3>
      <div className="d-flex justify-content-between align-items-center p-3">
        <div>
          <h4>
            {selectedAddress.name}
          </h4>
        </div>
        <h2>${amount}</h2>
      </div>
      <div className="rounded shadow bg-dark d-flex flex-column align-items-center justify-content-center user-pay-form border border-success rounded p-3 mx-auto">
        <div
          style={{ height: "200px", width: "200px"}}
          className="rounded"
        >
          <img src={selectedAddress.image} className="w-100" alt="" />
        </div>
        <p>Send ${amount} to the address below</p>
        <div className="d-flex w-75">
          <input type="text" name="" value={selectedAddress.address} id="" className="w-100 rounded"/>
          <CopyToClipboard text={selectedAddress.address} onCopy={() => setCopied(true)}>
            <FaRegClipboard size={30} cursor="pointer" />
          </CopyToClipboard>
          {copied ? (<span style={{color: 'green'}}>Copied</span>): null }
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
