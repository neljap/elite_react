import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import { useState } from "react";
import { auth, db, gProvider } from "../../server";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from "firebase/auth";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import ReCaptha from "./ReCaptha";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

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
  const [checked, setChecked] = useState(false)
  const [isRecapVerify, setIsRecapVerify] = useState(false)

  const navigate = useNavigate();

  const {setCurrentUser} = useContext(UserContext);

  const handleRecapChange = (value) => {
    setIsRecapVerify(true)
  }

  // google signInWithPopup
  const handleSignInwithGoogle = async() => {
    const result = await signInWithPopup(auth, gProvider)
    const resUid = result.user.uid
    const docId = doc(db, 'users', resUid)
    const docSnapSnot = await getDoc(docId)
    console.log(docSnapSnot.exists())
    if(docSnapSnot.exists()){
     const response = docSnapSnot.data()
     localStorage.setItem('user', JSON.stringify(response))
     setCurrentUser(response)
     toast.success("Login Successfully", {
       position: "bottom-left"
     })
    }else{
     toast.error('Your Data does not exist, Please Register', {
       position: 'bottom-left'
     })
     return;
    }
    navigate('/user/home')
   }

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      if (password !== passwordConfirm) {
        toast.error('Password do not match, Try Again', {
          position: "bottom-left"
        })
        return;
      }else if(!isRecapVerify){
        toast.error('Verify that you are not a bot', {
          position: "bottom-left"
        })
      }else{
        setLoading(true)
      const {user} = await createUserWithEmailAndPassword(auth, email, password)
      if(user){
        const dlog = await sendEmailVerification(auth.currentUser)
        console.log(dlog)
      }else{
        console.log("done")
      }
      const userEmail = user.email
      const userUid = user.uid
      const profilePics = ''
      const totalDeposit = 0
      const totalProfit = 0
      const totalAmount = 0
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
    
      const userData = {userEmail, userUid, number, fullname, profilePics, totalDeposit, totalRefferals, totalWithDraw, dob, verified, createdAt, totalBtc, totalEth, totalLtc, totalUSD, tBonus, totalAmount, totalProfit}
      const userDocRef = doc(db, 'users', userUid)
      const newData = await setDoc(userDocRef, {userData})
      toast.success('Registration Successfully, Login to Get Started', {
        position: 'bottom-left'
      })
      navigate('/login')
      }
    } catch (error) {
      console.log(error.code)
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
                required
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
                required
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
                required
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
                required
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
                <Form.Check type="checkbox" label="I agree to the terms and conditions of Spectrum Capitals Limited" required={true} onChange={(e) => setChecked(e.target.checked)} />
                <ReCaptha onChange={handleRecapChange} />
          <button
            variant="success"
            type="submit"
            className="w-100 my-3 btn btn-success"
          >
            {loading ? (<>Signing Up...</>):(
              <>Sign Up</>
            )}
            {/* Sign Up */}
          </button>
          <button
            variant="primary"
            type="button"
            className="w-100 btn btn-primary"
          onClick={handleSignInwithGoogle}
          >
          
            Sign In With Google
          </button>
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
