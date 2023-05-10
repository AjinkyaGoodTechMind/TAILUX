import React, { Fragment, useState } from "react";
import Navbar from "../layout/navbar/Navbar";
import { Link } from "react-router-dom";
import OTPInput from "react-otp-input";
import "./OtpPage.css";

const ResetPasswordOtp = () => {
  const [otp, setOtp] = useState("");

  return (
    <Fragment>
       <div className="logInBackground">
      <Navbar />

      <div className="screenH">
        <div className="box1 resetPasswordOtpContainer">
          <p className="heading2">Reset Password</p>

          <p className="text1">
            manju@gmail.com Not your Mail?{" "}
            <Link to="/resetPassword" className="text2">
              Edit Now
            </Link>
          </p>

          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => <input {...props} />}
            inputStyle="otpBoxes"
          />

          <p className="text1">
            OTP Not Received?{" "}
            <Link className="text2" to="/">
              Send Again
            </Link>
          </p>

          <button className="btn1 mt-5 mb-4">SUBMIT</button>

          <Link className="text3" to="/login">
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

export default ResetPasswordOtp;
