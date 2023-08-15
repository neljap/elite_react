import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginFormSec = () => {
  return (
    <div className="container">
      <form className="signIn-form-container">
        <h1 className='text-center'>Sign In</h1>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="success" type="submit">
              Login
            </Button>
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
      </form>
    </div>
  );
}

export default LoginFormSec