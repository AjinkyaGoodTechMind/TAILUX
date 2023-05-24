import Banner from "../components/studio/Banner";
import Tag from "../components/studio/Tag";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";

import { useNavigate } from "react-router-dom";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormStepper from "./FormStepper";
import Fabric1 from "../assets/images/Fabric1.png";
import Fabric2 from "../assets/images/Fabric2.png";
import AliceCarousel from "react-alice-carousel";
import "./Studio.css";
import "./Step2.css";

function Step2() {
  const navigate = useNavigate();
  const Previous = useNavigate();

  const fabrics = [
    <div className="fabricBox">
      <img src={Fabric1} draggable="false" alt="Fabric1" />
      <p>BROCADE SILK</p>
    </div>,
    <div className="fabricBox">
      <img src={Fabric2} draggable="false" alt="Fabric2" />
      <p>CHINNAMON CHIFFON</p>
    </div>,
    <div className="fabricBox">
      <img src={Fabric1} draggable="false" alt="Fabric1" />
      <p>BROCADE SILK</p>
    </div>,
    <div className="fabricBox">
      <img src={Fabric2} draggable="false" alt="Fabric2" />
      <p>CHINNAMON CHIFFON</p>
    </div>,
    <div className="fabricBox">
      <img src={Fabric1} draggable="false" alt="Fabric1" />
      <p>BROCADE SILK</p>
    </div>,
    <div className="fabricBox">
      <img src={Fabric2} draggable="false" alt="Fabric2" />
      <p>CHINNAMON CHIFFON</p>
    </div>,
    <div className="fabricBox">
      <img src={Fabric1} draggable="false" alt="Fabric1" />
      <p>BROCADE SILK</p>
    </div>,
  ];

  return (
    <div id="Step-All-StudioPage">
      <Navbar />
      <Banner />
      <Tag />
      {/* Stepper */}
      <FormStepper active={1} />

      <div id="step2Content">
        <h3 className="Content-h1">Select Fabric for Formal Shirt</h3>
        <h5 className="Content-h3">Choose Fabric</h5>

        {/* Fabric Sliider */}
        <div>
          <AliceCarousel
            mouseTracking
            items={fabrics}
            slideBy="page"
            autoWidth
            disableButtonsControls
            disableDotsControls
          />
        </div>

        <h5 className="Content-h3">Choose Pattern</h5>

        {/* Fabric Sliider */}
        <div>
          <AliceCarousel
            mouseTracking
            items={fabrics}
            slideBy="page"
            autoWidth
            disableButtonsControls
            disableDotsControls
          />
        </div>
      </div>

      <div className="Buttons">
        <button id="previous" onClick={() => Previous("/tailuxStudio")}>
          Previous
        </button>
        <button id="next" onClick={() => navigate("/step3")}>
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
}
export default Step2;
