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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your First Name" />
            </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-Enter your Password"
                />
              </Form.Group>
            <Button variant="danger" type="submit">
              Login
            </Button>
            <div className="d-flex justify-content-between align-items-center py-3">
              <Link to="/login" className="text-decoration-none text-white">
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