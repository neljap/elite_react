import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi"
import "../../App.css";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { db } from "../../server";
import { doc, updateDoc } from "firebase/firestore";
import {updatePassword} from "firebase/auth"
import { toast } from "react-toastify";

const UserSetHm = () => {
   // User Information
  const {currentUser} = useContext(UserContext)

  const fullNameInfo = currentUser?.userData?.fullname
  const numberInfo = currentUser?.userData?.number
  const userEmailInfo = currentUser?.userData?.userEmail
  const dobInfo = currentUser?.userData?.dob
  const countryInfo = currentUser?.userData?.userCountry
  const cityInfo = currentUser?.userData?.userCity
  const postCodeInfo = currentUser?.userData?.userPostcode
  const stateInfo = currentUser?.userData?.userState
  const userUidInfo = currentUser?.userData?.userUid



  const [fullName, setFullName] = useState(fullNameInfo);
  const [number, setNumber] = useState(numberInfo)
  const [email, setEmail] = useState(userEmailInfo);
  const [dob, setDob] = useState(dobInfo);
  const [country, setCountry] = useState(countryInfo);
  const [city, setCity] = useState(cityInfo);
  const [postCode, setPostCode] = useState(postCodeInfo);
  const [state, setState] = useState(stateInfo);
  const [loading, setLoading] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleChangePassword = async(e) => {
    e.preventDefault()
    if(newPassword !== confirmNewPassword){
      toast.error("Password do not match", {position: "bottom-left"})
      return;
    }
    try{
      const newPwd = await updatePassword(currentUser, newPassword)
      console.log("newPwd", newPwd)
    }catch(err){
      console.log(err)
    }
  }

  const updatedDocs = {fullname: fullName, number, userEmail: email, dob, userCountry: country, userCity: city, userPostcode: postCode, userState: state}

 

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const userUpdateInfo = doc(db, "users", userUidInfo)
      const result = await updateDoc(userUpdateInfo, updatedDocs)
      setIsUpdatePassword(false)
      console.log(result)
    }catch(err){
      console.log(err)
    }
  };

  return (
    <>
    {/* Upload Profile Picture */}
    <Modal show={isUpload} onHide={() => setIsUpload(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsUpload(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setIsUpload(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Update Password */}
    <Modal show={isUpdatePassword} onHide={() => setIsUpdatePassword(false)}>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="New Password"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Re-Enter New Password</Form.Label>
              <Form.Control
                type="email"
                placeholder="Re-Enter New Password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleChangePassword}>
            Yes
          </Button>
          <Button variant="primary" onClick={() => setIsUpdatePassword(false)}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    

    <div className="h-75 w-75 mx-auto p-3 rounded my-3 bg-danger">
      <div className="d-flex justify-content-between align-items-center py-2">
      <div className=" d-flex">
        <div>
          <BiUserCircle size={40} />
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          <span>John Doe</span>
          <span>johndoe@gmail.com</span>
        </div>
        <div>
          <button className="btn btn-success" onClick={() => setIsUpload(!isUpload)}>Upload Photo</button>
        </div>
      </div>
      <div style={{display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center"}}>
        <button className="btn btn-warning" onClick={() => setIsUpdatePassword(!isUpdatePassword)}>Update Password</button>
        <Link to="/user/kyc-verify">
           <button className="btn btn-primary">Verify Account</button>
        </Link>
       
      </div>
      </div>
      
      <Form onSubmit={handleSubmit} className="bg-white rounded p-4">
        <div className="row px-3">
          <Form.Group className="col-md-6">
          <Form.Label className="text-black">Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={fullName}
            required
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>
          <Form.Group className="col-md-6">
          <Form.Label className="text-black">Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className="row px-3">
          <Form.Group className="col-md-6">
          <Form.Label className="text-black">Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone Number"
            name="number"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>
          <Form.Group className="col-md-6">
          <Form.Label className="text-black">Date Of Birth</Form.Label>
          <Form.Control
            type="text"
            placeholder="Date of Birth"
            name="email"
            required
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </Form.Group>
        </div>
        <h4 className="text-black mt-3 font-bold">Address</h4>
        <div className="row px-3" >
          <Form.Group className="col-md-6">
          <Form.Label className="text-black">Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Country"
            name="country"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </Form.Group>
          <Form.Group className="col-md-6">
          <Form.Label className="text-black">City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            name="city"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className="row px-3">
          <Form.Group className="col-md-6">
          <Form.Label className="text-black">Post Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your email address"
            name="postCode"
            required
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
          />
        </Form.Group>
          <Form.Group className="col-md-6">
          <Form.Label className="text-black">State</Form.Label>
          <Form.Control
            type="text"
            placeholder="State"
            name="state"
            required
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </Form.Group>
        </div>
        
        

        <div className="float-left">
          <Button variant="success" type="submit">
          {loading ? <>Updating...</> : <>Update</>}
        </Button>
        </div>
        
        {/* <div className="d-flex justify-content-between align-items-center py-3">
          <Link to="/register" className="text-decoration-none text-white">
            Don't have an account?
          </Link>
          <Link
            to="/reset-password"
            className="text-decoration-none text-white"
          >
            Forget Password
          </Link>
        </div> */}
      </Form>
    </div>
    </>
    
  );
};

export default UserSetHm;
