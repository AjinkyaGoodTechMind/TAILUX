import React, { useState } from "react";
import Banner from "../components/studio/Banner";
import Tag from "../components/studio/Tag";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";
import { useNavigate } from "react-router-dom";
import FormStepper from "./FormStepper";
import "./Step3.css";
import "./Step1.css";

export default function Step3() {
  const navigate = useNavigate();
  const Previous = useNavigate();

  return (
    <div id="Step-All-StudioPage">
      <Navbar />
      <Banner />
      <Tag />
      <FormStepper active={2} />
      <div id="Content">
        <h3 className="Content-h1">Select Color</h3>
        <h5 className="Content-h3">Darks</h5>
        <div className="StudioPage-Select-Color">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>

          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <h5 className="Content-h3">Classics</h5>
        <div className="StudioPage-Select-Color">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>

          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
      <div className="Buttons">
        <button id="previous" onClick={() => Previous("/step2")}>
          Previous
        </button>
        <button id="next" onClick={() => navigate("/step4a")}>
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
}

function handleClick(event) {
  const element = event.target;
  element.style.outline = "6px solid";
}

function handleDoubleClick(event) {
  const element = event.target;
  element.style.outline = "none";
}
