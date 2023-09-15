import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import { useState } from "react";
import { auth, db } from "../../server";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullname, setFullName] = useState('')
  const [number, setNumber] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [referId, setReferId] = useState('')
  const [loading, setLoading] = useState(false)
  const [visible, setVisble] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (password !== passwordConfirm) {
    //   alert("Password do not match");
    //   return;
    // }

    try {
      setLoading(true)
      const dataUse = await createUserWithEmailAndPassword(auth, email, password)

      const userEmail = dataUse.user.email
      const userUid = dataUse.user.uid
      const profilePics = ''
      const totalDeposit = 0
      const dob = ''
      const totalRefferals = 0
      const totalEth = 0
      const totalBtc = 0
      const totalLtc = 0
      const totalUSD = 0
      const tBonus = 0
      const verified = false
      const totalWithDraw = 0
      const createdAt = Timestamp.now()
    
      const userData = {userEmail, userUid, number, fullname, profilePics, totalDeposit, totalRefferals, totalWithDraw, dob, verified, createdAt, totalBtc, totalEth, totalLtc, totalUSD, tBonus}
      const userDocRef = doc(db, 'users', userUid)
      const newData = await setDoc(userDocRef, {userData})
      // console.log(newData)
      // console.log(userEmail)
      // console.log(dataUse.user)
      
      toast.success('Registration Successfully, Login to Get Started', {
        position: 'bottom-left'
      })
      navigate('/login')
      // setFormData(defaultData);
      // console.log(data);
      // toast.success("User Registered Successfully", {
      //   position: "bottom-left",
      // });
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="container">
      <div className="signUp-form-container">
        <h1 className="text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="row w-100">
            <div className="mb-3 col-md-6">
              <label>Full Name</label>
              <input
                type="text"
                value={fullname}
                name="fullname"
                // required
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your Full Name"
                className="w-100 rounded shadow p-1"
              />
            </div>

            <div className="mb-3 col-md-6">
              <label>Email</label>
              <input
                type="email"
                value={email}
                name="email"
                // required
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
                className="w-100 rounded shadow p-1"
              />
            </div>
          </div>
          <div className="row w-100">
            <div className="mb-3 col-md-6">
              <label>Phone Number</label>
              <input
                type="text"
                name="number"
                // required
                value={number}
                placeholder="Enter your Phone Number"
                onChange={(e) => setNumber(e.target.value)}
                className="w-100 rounded shadow p-1"
              />
            </div>
            <div className="mb-3 col-md-6">
              <label>Referral ID (Optional)</label>
              <input
                type="text"
                name="referred"
                value={referId}
                placeholder="Enter your Referral Id"
                onChange={(e) => setReferId(e.target.value)}
                className="w-100 rounded shadow p-1"
              />
            </div>
          </div>
          <div className="row w-100">
            <div className="mb-3 col-md-6" style={{position: 'relative'}}>
              <label>Password</label>
              <input
                type={visible ? 'text' : 'password'}
                name="password"
                value={password}
                // required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                className="w-100 rounded shadow p-1"
              />
              <div style={{position: 'absolute', right: '15px', top: '30px', cursor: 'pointer'}}>
                {visible ? (
                  <AiOutlineEye color="black" size={25} onClick={() => setVisble(false)}/>
                ):(
                  <AiOutlineEyeInvisible color="black" size={25} onClick={() => setVisble(true)}/>
                )}
              </div>
            </div>
            <div className="mb-3 col-md-6" style={{position: 'relative'}}>
              <label>Confirm Password</label>
              <input
                type={showPass ? 'text' : 'password'}
                name="passwordConfirm"
                value={passwordConfirm}
                // required
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder="Re-Enter your Password"
                className="w-100 rounded shadow p-1"
              />
              <div style={{position: 'absolute', right: '15px', top: '30px', cursor: 'pointer'}}>
                {showPass ? (
                <AiOutlineEye color="black" size={25} onClick={() => setShowPass(false)} />
              ):(
                <AiOutlineEyeInvisible color="black" size={25} onClick={() => setShowPass(true)} />
              )}
              </div>
              
            </div>
          </div>

          <button
            variant="success"
            type="submit"
            className="w-100 mb-3 btn btn-success"
          >
            {loading ? (<>Signing Up...</>):(
              <>Sign Up</>
            )}
            {/* Sign Up */}
          </button>
          {/* <button
            variant="primary"
            type="button"
            className="w-100 btn btn-primary"
          onClick={googleProviderHandler}>
          
            Sign In With Google
          </button> */}
          <div className="d-flex justify-content-between align-items-center py-3">
            <Link to="/login" className="text-decoration-none text-white">
              Already have an account?
            </Link>
            <span className="text-decoration-none text-white">
              {/* Forget Password */}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
