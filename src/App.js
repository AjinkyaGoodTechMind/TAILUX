import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
// import LogInSignUp1 from "./components/user/LogInSignUp1";
import OtpPage from "./components/user/OtpPage";
import CreateAccount from "./components/user/CreateAccount";
import Login from "./components/user/Login";
import ResetPassword from "./components/user/ResetPassword";
import ResetPasswordOtp from "./components/user/ResetPasswordOtp";
import SetPassword from "./components/user/SetPassword";
import Product from "./components/product/Product";
import Step1 from "./StudioPage/Step1";
import Step2 from "./StudioPage/Step2";
import Step3 from "./StudioPage/Step3";
import Step4a from "./StudioPage/Step4a";
import Step4b from "./StudioPage/Step4b";
import Step5 from "./StudioPage/Step5";
import Cart1 from "./components/cart/Cart1";
import Mens from "./StudioPage/Mens";
import ProductCustomization from "./components/product/ProductCustomization";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./actions/userActions";
import Category from "./components/category/category";
import Cart2 from "./components/cart/Cart2";
import Cart3 from "./components/cart/Cart3";
import { CLEAR_ERRORS } from "./constants/userConstants";

function App() {
  const dispatch = useDispatch()

  const { error } = useSelector((state) => state.user)

  useEffect(() => {

    dispatch(loadUser())

  }, []);

  useEffect(() => {
    if (error) {
      alert('Please Login to access all Resources')
      dispatch({ type: CLEAR_ERRORS })
    }
  }, [error]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/otpPage" element={<OtpPage />} />
        <Route exact path="/register" element={<CreateAccount />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/resetPassword" element={<ResetPassword />} />
        <Route exact path="/resetPasswordOtp" element={<ResetPasswordOtp />} />
        <Route exact path="/productCustomization/:id" element={<ProductCustomization />} />
        <Route exact path="/setPassword" element={<SetPassword />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/tailuxStudio" element={<Step1 />} />
        <Route exact path="/step2" element={<Step2 />} />
        <Route exact path="/step3" element={<Step3 />} />
        <Route exact path="/step4a" element={<Step4a />} />
        <Route exact path="/step4b" element={<Step4b />} />
        <Route exact path="/step5" element={<Step5 />} />
        <Route exact path="/cart" element={<Cart1 />} />
        <Route exact path="/cart2" element={<Cart2 />} />
        <Route exact path="/cart3" element={<Cart3 />} />
        <Route exact path="/mens" element={<Mens />} />
        <Route exact path="/category/:categoryName" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
