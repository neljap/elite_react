import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";
import { useState } from "react";
import { createUser } from "../../server_side/userAuth";
import { googleProvider } from "../../server_side/userAuth";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const defaultData = {
    email: "",
    fullname: "",
    ["referred by"]: "",
    number: "",
    password: "",
    passwordConfirm: "",
  };

  const [formData, setFormData] = useState(defaultData);
  const { email, fullname, number, password, passwordConfirm } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("Password do not match");
      return;
    }

    try {
      const data = await createUser({ fullname, email, number, password });
      setFormData(defaultData);
      console.log(data);
      toast.success("User Registered Successfully", {
        position: "bottom-left",
      });
    } catch (error) {
      toast.error(error, {
        position: 'bottom-left'
      })
      // switch (error.code) {
      //   case "auth/wrong-password":
      //     toast.error("Incorrect password or email", {
      //       position: "bottom-left",
      //     });
      //     break;
      //   case "auth/user-not-found":
      //     alert("no user associated with this email");
      //     break;
      //   case "auth/email-already-in-use":
      //     toast.error("Email already Exist", {
      //       position: "bottom-left",
      //     });
      //   default:
      //     console.log(error);
      // }
    }
  };

  const googleProviderHandler = async() => {
    try{
      await googleProvider()
    }catch(err){
      console.log(err)
    }
    
  }

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
                onChange={handleChange}
                placeholder="Enter your First Name"
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
                placeholder="Enter your email"
                onChange={handleChange}
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
                placeholder="Enter username"
                onChange={handleChange}
                className="w-100 rounded shadow p-1"
              />
            </div>
            <div className="mb-3 col-md-6">
              <label>Referral ID (Optional)</label>
              <input
                type="text"
                name="referred"
                placeholder="Enter username"
                onChange={handleChange}
                className="w-100 rounded shadow p-1"
              />
            </div>
          </div>
          <div className="row w-100">
            <div className="mb-3 col-md-6">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                required
                onChange={handleChange}
                placeholder="Enter your Password"
                className="w-100 rounded shadow p-1"
              />
            </div>
            <div className="mb-3 col-md-6">
              <label>Confirm Password</label>
              <input
                type="password"
                name="passwordConfirm"
                value={passwordConfirm}
                required
                onChange={handleChange}
                placeholder="Re-Enter your Password"
                className="w-100 rounded shadow p-1"
              />
            </div>
          </div>

          <button
            variant="success"
            type="submit"
            className="w-100 mb-3 btn btn-success"
          >
            Sign Up
          </button>
          <button
            variant="primary"
            type="button"
            className="w-100 btn btn-primary"
            onClick={googleProviderHandler}
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
