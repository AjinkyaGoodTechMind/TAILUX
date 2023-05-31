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
import Step1 from "./components/StudioPage/Step1";
import Step2 from "./components/StudioPage/Step2";
import Step3 from "./components/StudioPage/Step3";
import Step4 from "./components/StudioPage/Step4";
import Step5 from "./components/StudioPage/Step5";
import Cart from "./components/cart/Cart";
import ProductCustomization from "./components/product/ProductCustomization";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./actions/userActions";
import Category from "./components/productCategories/category";
import SelectAddress from "./components/cart/SelectAddress";
import Payment from "./components/cart/Payment";
import { CLEAR_ERRORS } from "./constants/userConstants";
import FinalStep from "./components/StudioPage/FinalStep";

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
        <Route exact path="/step4" element={<Step4 />} />
        <Route exact path="/step5" element={<Step5 />} />
        <Route exact path="/finalStep" element={<FinalStep />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/selectAddress" element={<SelectAddress />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/category/:categoryName" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
