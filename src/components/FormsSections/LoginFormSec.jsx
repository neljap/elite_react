import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {toast} from 'react-toastify'
import Cookies from "js-cookie"
import axios from "axios"
import { useContext } from "react";
// import { UserContext } from "../../context/UserContext";
import ReCaptha from "./ReCaptha";

const LoginFormSec = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isRecapVerify, setIsRecapVerify] = useState(false)
  const navigate = useNavigate()
  // const handleRecapChange = (value) => {
  //   setIsRecapVerify(true)
  // }

  const handleSubmit = async(e) => {
    e.preventDefault()
    
    if(!email || !password) return;
    // if(!isRecapVerify){
    //     toast.error('Verify that you are not a bot', {
    //       position: "bottom-left"
    //     })
    //     return;
    // }
      setLoading(true)

      const formData = {email, password}

      await axios
        .post("https://specserver.vercel.app/api/user/login", formData)
        .then((res) => {
          Cookies.set("token", res.data.token, { expires: 7 });
          navigate("/user/home");
          window.location.reload()
          toast.success("Login Successfully", {position: "bottom-left"})
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message, {position: "bottom-left"})
          setLoading(false);
        }).finally(() => setLoading(false));
      
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
            <div>
             {/* <ReCaptha onChange={handleRecapChange} />  */}
            </div>
            <Button variant="success" type="submit" className="w-100 mb-3" >
             {loading ? (<>Logging...</>) : (<>Login</>) }
            </Button>
            <Button variant="primary" type="button" className="w-100">Sign In With Google</Button>

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
};

export default LoginFormSec;