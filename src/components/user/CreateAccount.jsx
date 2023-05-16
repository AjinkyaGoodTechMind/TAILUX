import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../layout/navbar/Navbar";
import { register } from "../../actions/userAction";
import "./CreateAccount.css";

import FacebookIcon2 from "../../assets/images/FacebookIcon2.svg";
import GoogleIcon from "../../assets/images/GoogleIcon.svg";

const CreateAccount = () => {
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

    const formData0 = new FormData();
    formData0.append("email", formData.email);
    formData0.append("mobile", formData.mobile);
    formData0.append("password", formData.password);
    formData0.append("confirmPassword", formData.confirmPassword);

    dispatch(register(formData0));
  };

  return (
    <Fragment>
      <div className="logInBackground">
        <Navbar />

        <div className="screenH">
          <div className="createAcountContainer box1">
            <p className="heading2">Create Account</p>

            <form onSubmit={submitHandler} encType="multipart/form-data">
              <input
                placeholder="Enter your Mobile No."
                className="input1"
                type="text"
                name="mobile"
                onChange={collectData}
              />
              <input
                placeholder="Enter your Email"
                className="input1"
                type="text"
                name="email"
                onChange={collectData}
              />
              <input
                placeholder="Create Password"
                className="input1"
                type="text"
                name="password"
                onChange={collectData}
              />
              <input
                placeholder="Re-Enter Password"
                className="input1"
                type="text"
                name="confirmPassword"
                onChange={collectData}
              />

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

export default CreateAccount;
