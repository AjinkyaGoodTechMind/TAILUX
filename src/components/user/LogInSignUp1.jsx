import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Navbar from "../layout/navbar/Navbar";

import FacebookIcon2 from "../../assets/images/FacebookIcon2.svg";
import GoogleIcon from "../../assets/images/GoogleIcon.svg";

import "./LogInSignUp.css";

const LogInSignUp1 = () => {
  return (
    <Fragment>
      <div className="logInBackground">
        <Navbar />

        <div className="screenH">
          <div className="box1 logInSignUpContainer">
            <p className="heading2">
              Login <span> or</span> Signup
            </p>

            <input
              className="input1"
              type="text"
              min={10}
              name=""
              id=""
              placeholder="+91   |   Mobile Number"
            />

            <p className="text1">
              By continuing, I agree to the{" "}
              <Link className="text2" to="/logInSignUp1">
                Terms of Use
              </Link>{" "}
              &{" "}
              <Link className="text2" to={"/logInSignUp1"}>
                Privacy Policy
              </Link>
            </p>

            <button className="btn1">CONTINUE</button>

            <p className="text1">
              Or <span className="text2"> Continue With:</span>
            </p>

            <div className="allCenter pt-1 pb-1">
              <button className="btn2">
                <img className="facebookIcon2" src={FacebookIcon2} alt="" />
              </button>
              <button className="btn2">
                <img className="googleIcon" src={GoogleIcon} alt="" />
              </button>
            </div>

            <Link className="text3" to={"/login"}>
              SIGNIN WITH PASSWORD
            </Link>

            <p className="text1">
              Have trouble logging in?{" "}
              <Link className="text2" to={"/logInSignUp"}>
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

export default LogInSignUp1;
