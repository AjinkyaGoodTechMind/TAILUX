import React, { Fragment } from "react";
import Navbar from "../layout/navbar/Navbar";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <Fragment>
       <div className="logInBackground">
      <Navbar />

      <div className="screenH">
        <div className="ResetPasswordContainer box1">
          <p className="heading2">Reset Password</p>

          <input
            placeholder="Email/Phone Number"
            className="input1 mt-5 mb-4"
            type="text"
            name=""
            id=""
          />

          <button className="btn1">SUBMIT</button>

          <Link to="/login" className="text3">
            Go to Login Page
          </Link>

          <p className="text1">
            Have trouble logging in?{" "}
            <Link className="text2" to="/">
              {" "}
              Get help
            </Link>
          </p>
        </div>
      </div>

      </div>
    </Fragment>
  );
};

export default ResetPassword;
