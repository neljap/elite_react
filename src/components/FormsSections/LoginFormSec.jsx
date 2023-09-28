import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { auth, gProvider, googleSignInWithPopup } from "../../server";
import { signInWithEmailAndPassword, signInWithPopup, sendEmailVerification } from "firebase/auth"; 
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {toast} from 'react-toastify'
import { db } from "../../server";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { signInWithGoogle } from "../../server";

const LoginFormSec = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const {setCurrentUser, currentUser, setUserDataInfo, userDataInfo} = useContext(UserContext)

  useEffect(() => {
    const currentState = window.localStorage.getItem('user')

      setCurrentUser(currentState)
  }, [currentUser])

  useEffect(() => {
    const savedData = window.localStorage.getItem('user')

    if(savedData){
        setUserDataInfo(savedData.userData)
    }    
}, [currentUser])

  const navigate = useNavigate()

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

  const handleSubmit = async(e) => {
    e.preventDefault()
    
    if(!email || !password) return;

    try{
      setLoading(true)
      const {user} = await signInWithEmailAndPassword(auth, email, password)
      
      setCurrentUser(user)
      
      const dInfoUid = user.uid
      const userDocRef = doc(db, 'users', dInfoUid)
      const userDocSnap = await getDoc(userDocRef)
      if(userDocSnap.id){
        const response = userDocSnap.data()
        localStorage.setItem('user', JSON.stringify(response))
        setCurrentUser(response)
      }else{
        // console.log('No Document Found in the Database')
      }
      setEmail('')
      setPassword('')
      toast.success('Login Successfully', {
        position: 'bottom-left'
      })
      setLoading(false)
      navigate('/user/home')
    }catch(err){
      if(err.code === 'auth/user-not-found'){
        toast.error('User Not Found', {
          position: 'bottom-left'
        })
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


  return (
    <div className="container">
      <div className="signIn-form-container">
        <h1 className='text-center'>Sign In</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email address" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" style={{position: 'relative'}} controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type={visible ? 'text' : 'password'} placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <div style={{position: 'absolute', right: '10px', top: '35px', cursor: 'pointer'}}>
                {visible ? (
                  <AiOutlineEye size={25} color="black" onClick={() => setVisible(false)}/>
                ):(
                  <AiOutlineEyeInvisible color="black" size={25} onClick={() => setVisible(true)} />
                )}
              </div>
            </Form.Group>
            <Button variant="success" type="submit" className="w-100 mb-3" >
             {loading ? (<>Logining...</>) : (<>Login</>) }
            </Button>
            <Button variant="primary" type="button" className="w-100" onClick={handleSignInwithGoogle}>Sign In With Google</Button>
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