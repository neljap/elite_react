import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { auth } from "../../server";
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { signInWithEmailAndPasswordHandler, googleProvider } from "../../server_side/userAuth";
import {toast} from 'react-toastify'
import { db } from "../../server";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../../context/UserReduce";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { current } from "@reduxjs/toolkit";

const LoginFormSec = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [loading, setLoading] = useState(false)
  const {setCurrentUser, currentUser, setUserDataInfo, userDataInfo} = useContext(UserContext)

  useEffect(() => {
    const currentState = window.localStorage.getItem('user')

      setCurrentUser(currentState)
  }, [currentUser])

  useEffect(() => {
    const savedData = window.localStorage.getItem('user')

    if(savedData){
        console.dir(savedData, {depth: null})
        setUserDataInfo(savedData.userData)
    }    
}, [currentUser])

  const navigate = useNavigate()
  // const dispatch = useDispatch()

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(!email || !password) return;

    try{
      // let credential = {email, password}
      // dispatch(loginUser(credential))
      const authInfo = await signInWithEmailAndPassword(auth, email, password)
      const dataInfo = authInfo.user
      setCurrentUser(dataInfo)
      console.log('data info', dataInfo)
      const dInfoUid = authInfo.user.uid
      console.log(dInfoUid)
      const userDocRef = doc(db, 'users', dInfoUid)
      const userDocSnap = await getDoc(userDocRef)
      console.log(userDocSnap)
      if(userDocSnap.id){
        const response = userDocSnap.data()
        console.log(response)
        localStorage.setItem('user', JSON.stringify(response))
        setCurrentUser(response)
      }else{
        console.log('No Document Found in the Database')
      }
      setEmail('')
      setPassword('')
      toast.success('Login Successfully', {
        position: 'bottom-left'
      })
      navigate('/user/home')
    }catch(err){
      console.log(err)
      if(err.code === 'auth/user-not-found'){
        toast.error('User Not Found', {
          position: 'bottom-left'
        })
        // alert('User Not Found')
      }else if (err.code === 'auth/network-request-failed'){
        toast.error('No Network, Please Check your Internet Connection', {
          position: 'bottom-left'
        })
      }else if (err.code === 'auth/wrong-password'){
        toast.error('Incorrect Password', {
          position: 'bottom-left'
        })
      }
    }
  }

  const googleProviderHandler = async() => {
    try{
      await googleProvider()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="container">
      <div className="signIn-form-container">
        <h1 className='text-center'>Sign In</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="Enter username" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="success" type="submit" className="w-100 mb-3" >
             Login
            </Button>
            <Button variant="primary" type="button" className="w-100" onClick={googleProviderHandler}>Sign In With Google</Button>
            <div className="d-flex justify-content-between align-items-center py-3">
              <Link to="/register" className="text-decoration-none text-white">
                Don't have an account?
              </Link>
              <Link to="/reset-password" className="text-decoration-none text-white">
                Forget Password
              </Link>
            </div>
          </Form>
        </div>
    </div>
  );
}

export default LoginFormSec