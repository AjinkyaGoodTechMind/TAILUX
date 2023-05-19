import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
import LogInSignUp1 from "./components/user/LogInSignUp1";
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
import { useDispatch } from "react-redux";
import { loadUser } from "./actions/userActions";
import Men from "./components/category/men";
import Women from "./components/category/women";
import Kids from "./components/category/Kid";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/otpPage" element={<OtpPage />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/resetPasswordOtp" element={<ResetPasswordOtp />} />
        <Route path="/productCustomization" element={<ProductCustomization />} />
        <Route path="/setPassword" element={<SetPassword />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/tailuxStudio" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4a" element={<Step4a />} />
        <Route path="/step4b" element={<Step4b />} />
        <Route path="/step5" element={<Step5 />} />
        <Route path="/cart" element={<Cart1 />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
