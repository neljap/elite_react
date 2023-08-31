import { FaRegClipboard } from "react-icons/fa";
import { Form, Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { storage } from "../../server_side/userUpdate";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addressData } from "./UserInvData";

const UserPayDataInfo = () => {
  const navigate = useNavigate()
  const {wallet} = useParams()
  const {amount} = useParams()
  const [fileUp, setFileUp] = useState(null)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selectedAddress = addressData.find((item) => item.name === wallet)

  return (
    <div className="bg-dark mx-auto">
      <h3>Make Payment</h3>
      <div className="d-flex justify-content-between align-items-center p-3">
        <div></div>
        <h2>${amount}</h2>
      </div>
      <div className="rounded shadow bg-dark ">
        <p>Scan the barcode below to make Payment</p>
        <div
          style={{ height: "200px", width: "200px", backgroundColor: "black" }}
        ></div>
        <p>Or Send $500 to the address below</p>
        <div className="d-flex">
          <input type="text" name="" value={selectedAddress.address} id="" />
          <div>
            <FaRegClipboard />
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
