// import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import {sendPasswordResetEmail} from "firebase/auth"
import { auth } from "../../server"
import { useState } from "react"

const ResetPassSect = () => {
  const [email, setEmail] = useState("")

  const sendReset = async (e) => {
    e.preventDefault()
    try{
      const response = await sendPasswordResetEmail(auth, email)
      console.log(response)
    }catch(error){
      console.log(error, "reset")
    }
  }
  return (
    <div className="container">
      <form className="signIn-form-container">
        <h2 className="text-center">Reset Password</h2>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Password </Form.Label> */}
              <Form.Control type="email" placeholder="Enter Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Button variant="danger" type="submit" onClick={sendReset}>
              SEND PASSWORD RESET LINK
            </Button>
          </Form>
        </div>
      </form>
    </div>
  )
}

export default ResetPassSect