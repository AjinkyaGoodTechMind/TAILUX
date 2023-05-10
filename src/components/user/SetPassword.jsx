import React, { Fragment } from "react";
import Navbar from "../layout/navbar/Navbar";
import { Link } from "react-router-dom";
import "./SetPassword.css";

const SetPassword = () => {
  return (
    <Fragment>
       <div className="logInBackground">
      <Navbar />

      <div className="screenH">
        <div className="setPasswordContainer box1">
          <p className="heading2">Set Password</p>

          <p>
            Hello <span> Manju,</span>
          </p>

          <p className="my-4">
            <span>manju@gmail.com </span>
            <span className="text1">
              Not manju?{" "}
              <Link to="/resetPassword" className="text2">
                Change Now
              </Link>
            </span>
          </p>

          <input
            placeholder="Create Password"
            className="input1 my-2"
            type="text"
            name=""
            id=""
          />

          <input
            placeholder="Re-Enter Password"
            className="input1 my-2"
            type="text"
            name=""
            id=""
          />

          <button className="btn1 my-4">SUBMIT</button>

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

export default SetPassword;
