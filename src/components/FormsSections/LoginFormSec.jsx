import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { signInWithEmailAndPasswordHandler, googleProvider } from "../../server_side/userAuth";
import {toast} from 'react-toastify'

const LoginFormSec = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [loading, setLoading] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(!email || !password) return;

    try{
      const {user} = await signInWithEmailAndPassword(email, password)
      // console.log(LoginData)
      console.log(user)
      // toast.success('Login Successfully', {
      //   position: 'bottom-left'
      // })
    }catch(err){
      console.log(err)
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