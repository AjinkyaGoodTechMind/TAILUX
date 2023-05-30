import Banner from "../components/studio/Banner";
import Tag from "../components/studio/Tag";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormStepper from "./FormStepper";
import Fabric1 from "../assets/images/Fabric1.png";
import Fabric2 from "../assets/images/Fabric2.png";
import AliceCarousel from "react-alice-carousel";
import "./Studio.css";
import HeadPhone from "../components/layout/HeadPhone";
import { useDispatch } from "react-redux";
import { collectCustomProductData } from "../actions/customProductActions";

function Step2() {
  const [fabric, setFabric] = useState();
  const [pattern, setPattern] = useState();

  const navigate = useNavigate();
  const Previous = useNavigate();

  const dispatch = useDispatch();

  const submitData = () => {
    if (!fabric) {
      return alert("Choose a Fabric");
    }
    if (!pattern) {
      return alert("Choose a pattern");
    }
    dispatch(collectCustomProductData({ fabric, pattern }));
    navigate("/step3");
  };

  const fabrics1 = [
    <div className="fabricBox">
      <img
        onClick={() => setFabric("fabric1")}
        src={Fabric1}
        draggable="false"
        alt="Fabric1"
      />
      <p style={fabric === "fabric1" ? { top: "10px", bottom: "auto" } : {}}>
        BROCADE SILK
      </p>
      <p
        style={
          fabric === "fabric1" ? { display: "block" } : { display: "none" }
        }
      >
        SELECTED
      </p>
    </div>,
    <div className="fabricBox">
      <img
        onClick={() => setFabric("fabric2")}
        src={Fabric2}
        draggable="false"
        alt="Fabric2"
      />
      <p style={fabric === "fabric2" ? { top: "10px", bottom: "auto" } : {}}>
        CHINNAMON CHIFFON
      </p>
      <p
        style={
          fabric === "fabric2" ? { display: "block" } : { display: "none" }
        }
      >
        SELECTED
      </p>
    </div>,
    <div className="fabricBox">
      <img
        onClick={() => setFabric("fabric3")}
        src={Fabric1}
        draggable="false"
        alt="Fabric1"
      />
      <p style={fabric === "fabric3" ? { top: "10px", bottom: "auto" } : {}}>
        BROCADE SILK
      </p>
      <p
        style={
          fabric === "fabric3" ? { display: "block" } : { display: "none" }
        }
      >
        SELECTED
      </p>
    </div>,
    <div className="fabricBox">
      <img
        onClick={() => setFabric("fabric4")}
        src={Fabric2}
        draggable="false"
        alt="Fabric2"
      />
      <p style={fabric === "fabric4" ? { top: "10px", bottom: "auto" } : {}}>
        CHINNAMON CHIFFON
      </p>
      <p
        style={
          fabric === "fabric4" ? { display: "block" } : { display: "none" }
        }
      >
        SELECTED
      </p>
    </div>,
    <div className="fabricBox">
      <img
        onClick={() => setFabric("fabric5")}
        src={Fabric1}
        draggable="false"
        alt="Fabric1"
      />
      <p style={fabric === "fabric5" ? { top: "10px", bottom: "auto" } : {}}>
        BROCADE SILK
      </p>
      <p
        style={
          fabric === "fabric5" ? { display: "block" } : { display: "none" }
        }
      >
        SELECTED
      </p>
    </div>,
    <div className="fabricBox">
      <img
        onClick={() => setFabric("fabric6")}
        src={Fabric2}
        draggable="false"
        alt="Fabric2"
      />
      <p style={fabric === "fabric6" ? { top: "10px", bottom: "auto" } : {}}>
        CHINNAMON CHIFFON
      </p>
      <p
        style={
          fabric === "fabric6" ? { display: "block" } : { display: "none" }
        }
      >
        SELECTED
      </p>
    </div>,
    <div className="fabricBox">
      <img
        onClick={() => setFabric("fabric7")}
        src={Fabric1}
        draggable="false"
        alt="Fabric1"
      />
      <p style={fabric === "fabric7" ? { top: "10px", bottom: "auto" } : {}}>
        BROCADE SILK
      </p>
      <p
        style={
          fabric === "fabric7" ? { display: "block" } : { display: "none" }
        }
      >
        SELECTED
      </p>
    </div>,
  ];

  const fabrics2 = [
    <div className="fabricBox">
      <img
        onClick={() => setPattern("pattern1")}
        src={Fabric1}
        draggable="false"
        alt="Fabric1"
      />
      <p style={pattern === "pattern1" ? { top: "10px", bottom: "auto" } : {}}>
        BROCADE SILK
      </p>
      <p
        style={
          pattern === "pattern1" ? { display: "block" } : { display: "none" }
        }
      >
        SELECTED
      </p>
    </div>,
    <div className="fabricBox">
      <img
        onClick={() => setPattern("pattern2")}
        src={Fabric2}
        draggable="false"
        alt="Fabric2"
      />
      <p style={pattern === "pattern2" ? { top: "10px", bottom: "auto" } : {}}>
        CHINNAMON CHIFFON
      </p>
      <p
        style={
          pattern === "pattern2" ? { display: "block" } : { display: "none" }
        }
      >
        SELECTED
      </p>
    </div>,
    <div className="fabricBox">
      <img
        onClick={() => setPattern("pattern3")}
        src={Fabric1}
        draggable="false"
        alt="Fabric1"
      />
      <p style={pattern === "pattern3" ? { top: "10px", bottom: "auto" } : {}}>
        BROCADE SILK
      </p>
      <p
        style={
          pattern === "pattern3" ? { display: "block" } : { display: "none" }
        }
      >
        SELECTED
      </p>
    </div>,
    <div className="fabricBox">
      <img
        onClick={() => setPattern("pattern4")}
        src={Fabric2}
        draggable="false"
        alt="Fabric2"
      />
      <p style={pattern === "pattern4" ? { top: "10px", bottom: "auto" } : {}}>
        CHINNAMON CHIFFON
      </p>
      <p
        style={
          pattern === "pattern4" ? { display: "block" } : { display: "none" }
        }
      >
        SELECTED
      </p>
    </div>,
    <div className="fabricBox">
      <img
        onClick={() => setPattern("pattern5")}
        src={Fabric1}
        draggable="false"
        alt="Fabric1"
      />
      <p style={pattern === "pattern5" ? { top: "10px", bottom: "auto" } : {}}>
        BROCADE SILK
      </p>
      <p
        style={
          pattern === "pattern5" ? { display: "block" } : { display: "none" }
        }
      >
        SELECTED
      </p>
    </div>,
    <div className="fabricBox">
      <img
        onClick={() => setPattern("pattern6")}
        src={Fabric2}
        draggable="false"
        alt="Fabric2"
      />
      <p style={pattern === "pattern6" ? { top: "10px", bottom: "auto" } : {}}>
        CHINNAMON CHIFFON
      </p>
      <p
        style={
          pattern === "pattern6" ? { display: "block" } : { display: "none" }
        }
      >
        SELECTED
      </p>
    </div>,
    <div className="fabricBox">
      <img
        onClick={() => setPattern("pattern7")}
        src={Fabric1}
        draggable="false"
        alt="Fabric1"
      />
      <p style={pattern === "pattern7" ? { top: "10px", bottom: "auto" } : {}}>
        BROCADE SILK
      </p>
      <p
        style={
          pattern === "pattern7" ? { display: "block" } : { display: "none" }
        }
      >
        SELECTED
      </p>
    </div>,
  ];

  return (
    <div id="Step-All-StudioPage" className="overflow-hidden">
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
            items={fabrics1}
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
            items={fabrics2}
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
        <button onClick={submitData} id="next">
          Next
        </button>
      </div>
      <HeadPhone />
      <Footer />
    </div>
  );
}
export default Step2;
