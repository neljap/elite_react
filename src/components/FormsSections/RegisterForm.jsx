import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../../App.css'

const RegisterForm = () => {
  return (
    <div className="container">
      <form className="signUp-form-container">
        <h1 className="text-center">Sign Up</h1>
        <div>
          <Form>
            <div className="row justify-content-center align-items-center">
              <Form.Group className="col-md-6 mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your First Name" />
              </Form.Group>
              <Form.Group className="col-md-6 mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your Last Name" />
              </Form.Group>
            </div>
            <div className="row justify-content-center align-items-center">
              <Form.Group className="col-md-6 mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>
              <Form.Group className="col-md-6 mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
            </div>
            <div className="row justify-content-center align-items-center">
              <Form.Group className="col-md-6 mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your Password"
                />
              </Form.Group>
              <Form.Group className="col-md-6 mb-3" controlId="formBasicEmail">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-Enter your Password"
                />
              </Form.Group>
            </div>
            <div className="row justify-content-center align-items-center">
              <Form.Group className="col-md-6 mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter username" />
              </Form.Group>
              <Form.Group className="col-md-6 mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter username" />
              </Form.Group>
            </div>
            <Button variant="danger" type="submit">
              Login
            </Button>
            <div className="d-flex justify-content-between align-items-center py-3">
              <Link to="/sign-in" className="text-decoration-none text-white">
                Already have an account?
              </Link>
              <span
                className="text-decoration-none text-white"
              >
                {/* Forget Password */}
              </span>
            </div>
          </Form>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm