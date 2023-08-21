import React, { useRef } from "react";
import { Link } from "react-router-dom";
import '../../App.css'

const UserSetHm = () => {
  const ChangeRef = useRef()

  const changeSetRef = () => {
    ChangeRef.current.classList.toggle('hide')
  }

  return (
    <div className="h-100 bg-dark">
      <div className="mx-auto">
        <div className="d-flex">
          <div>
            <h3>Full Name</h3>
            <p>Nelson Jason</p>
          </div>
          <Link to="/user/settings/change-fullname">Edit</Link>
        </div>
        <div>
          <div>
            <div className="d-flex">
              <div>
                <h3>Email Address</h3>
                <p>neljason@gmail.com</p>
              </div>
              <div>
                <button className="btn btn-success" onClick={changeSetRef}>Edit</button>
              </div>
              
            </div>
            <div ref={ChangeRef}>
              <form>
                <input type="email" />
                <button className="btn btn-success">Change</button>
              </form>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div>
            <h3>Profile Picture</h3>
            <div>image</div>
          </div>
          <Link to="/user/settings/change-profile-picture">Edit</Link>
        </div>
        <div className="d-flex">
          <h3>Change Password</h3>
          <Link to="/user/settings/change-password">
            <button className="btn btn-success">
              Click here to Change Password
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSetHm;
