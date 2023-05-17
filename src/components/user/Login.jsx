import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../layout/navbar/Navbar";
import { login } from "../../actions/userActions";

import FacebookIcon2 from "../../assets/images/FacebookIcon2.svg";
import GoogleIcon from "../../assets/images/GoogleIcon.svg";

const Login = () => {
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const collectData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(login(formData));
  };

  return (
    <Fragment>
      <div className="logInBackground">
        <Navbar />

        <div className="screenH">
          <div className="loginContainer box1">
            <p className="heading2">Login</p>

            <form onSubmit={submitHandler}>
              <input
                placeholder="Email/Phone Number"
                className="input1"
                type="text"
                name="email"
                onChange={collectData}
              />
              <input
                placeholder="Password"
                className="input1"
                type="text"
                name="password"
                onChange={collectData}
              />

              <p className="text1">
                Forgot Password?{" "}
                <Link className="text2" to="/resetPassword">
                  Reset Now
                </Link>
              </p>

              <p className="text1">
                By continuing, I agree to the{" "}
                <Link className="text2" to="/">
                  Terms of Use
                </Link>{" "}
                &{" "}
                <Link className="text2" to="/">
                  {" "}
                  Privacy Policy
                </Link>
              </p>

              <button type="submit" className="btn1">
                SUBMIT
              </button>
            </form>

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

export default Login;
