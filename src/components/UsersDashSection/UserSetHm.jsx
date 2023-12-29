import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import "../../App.css";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import {AuthContext} from "../context/AuthContext";
import { db, storage } from "../../server";
import axios from "axios";
import { toast } from "react-toastify";
import { BsCloudUpload } from "react-icons/bs";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const UserSetHm = () => {
    const {data} = useContext(AuthContext);
  const [fullname, setFullname] = useState(data?.fullname);
  const [number, setNumber] = useState(data?.number);
  const [email, setEmail] = useState(data?.email);
  const [dob, setDob] = useState(data?.dob);
  const [profilePics, setProfilePics] = useState(data?.profilePics);
  const [country, setCountry] = useState(data?.country);
  const [city, setCity] = useState(data?.city);
  const [postcode, setPostcode] = useState(data?.postcode);
  const [state, setState] = useState(data?.state);
  
  const [loading, setLoading] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  const inputRef = useRef(null);

  const uploadRef = () => {
    inputRef.current.click();
  };

//   const handleChangePassword = async (e) => {
//     e.preventDefault();
//     if (newPassword !== confirmNewPassword) {
//       toast.error("Password do not match", { position: "bottom-left" });
//       return;
//     }
//     try {
//       const newPwd = await updatePassword(currentUser, newPassword);
//       console.log("newPwd", newPwd);
//     } catch (err) {
//       console.log(err);
//     }
//   };

  const uploadFile = (e) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please Upload a file", {
        position: "bottom-left",
      });
      return;
    }

    try {
      const storageRef = ref(storage, `/profile_pics/${file.name}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setPercent(progress);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) =>
            setProfilePics(url)
          );
          toast.success("Uploaded Successfully", { position: "bottom-left" });
        }
      );
      setFile("");
      setIsUpload(false);
    } catch (err) {
        toast.error(err.code, {position: "bottom-left"});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (profilePics === "") {
    //   toast.info("Please Upload a profile Picture", {
    //     position: "bottom-left",
    //   });
    //   return;
    // }
    try {
    const updatedata = {fullname, dob, number, dob, country, city, postcode, state}
    const result = await axios.patch(`https://specserver.vercel.app/api/user/update/${data?._id}`, updatedata);
      console.log(result.data)
       toast.success("Updated Successfully", {position: "bottom-left"}) 
    } catch (err) {
      toast.error(err.code, {position: "bottom-left"})
      // console.log(err);
    }
  };

  return (
    <>
      {/* Upload Profile Picture */}
      <Modal show={isUpload} onHide={() => setIsUpload(false)}>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <div className="verify-box" onClick={uploadRef}>
                <input
                  type="file"
                  name=""
                  style={{ display: "none" }}
                  accept="/image/*"
                  id=""
                  onChange={(e) => setFile(e.target.files[0])}
                  ref={inputRef}
                />
                {/* <p>{percent} % done</p> */}
                <BsCloudUpload size={100} color="black" />
                <p className="text-center text-black">
                  Upload Your Document here
                </p>
              </div>
              {/* <button style={{margin: "0px auto"}} className="btn btn-success" >Upload</button> */}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={uploadFile}>
            Upload
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
          {/* <Button variant="success" onClick={handleChangePassword}>
            Yes
          </Button> */}
          <Button variant="primary" onClick={() => setIsUpdatePassword(false)}>
            No
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="h-75 w-75 mx-auto p-3 rounded my-3 bg-danger">
        <div className="d-flex justify-content-between align-items-center py-2 flex-wrap">
          <div className=" d-flex">
            <div>
              {profilePics === "" ? (
                <BiUserCircle size={40} />
              ) : (
                <div>
                  <img
                    src={profilePics}
                    alt="image"
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>{fullname}</span>
              <span>{email}</span>
            </div>
            <div>
              <button
                className="btn btn-success"
                onClick={() => setIsUpload(!isUpload)}
              >
                Upload Photo
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              className="btn btn-warning"
              onClick={() => setIsUpdatePassword(!isUpdatePassword)}
            >
              Update Password
            </button>
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
                value={fullname}
                required
                onChange={(e) => setFullname(e.target.value)}
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
          <div className="row px-3">
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
                placeholder="Postal Code"
                name="postCode"
                required
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
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
