// import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"

const ResetPassSect = () => {
  return (
    <div className="container">
      <form className="signIn-form-container">
        <h1 className="text-center">Sign In</h1>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter username" />
            </Form.Group>
            <Button variant="danger" type="submit">
              SEND PASSWORD RESET LINK
            </Button>
          </Form>
        </div>
      </form>
    </div>
  )
}

export default ResetPassSect