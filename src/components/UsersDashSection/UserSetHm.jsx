import React, { useRef } from "react";
import { Link } from "react-router-dom";
import '../../App.css'

const UserSetHm = () => {
  const ChangeRef = useRef()

  const changeSetRef = () => {
    ChangeRef.current.classList.toggle('hide')
  }

  return (
    <div className="user-depo-top bg-dark d-flex justify-content-center align-items-center">
      <div className="border border-success p-2">
        <div className="d-flex justify-content-between">
          <div>
            <h5>Full Name</h5>
            <p>Nelson Jason</p>
          </div>
          <Link to="/user/settings/change-fullname">Edit</Link>
        </div>
        <div>
          <div>
            <div className="d-flex">
              <div>
                <h5>Email Address</h5>
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
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="all-subheaders">Change Password</h5>
          <Link to="/user/settings/change-password">
            <button className="btn btn-success">
              Click here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSetHm;
