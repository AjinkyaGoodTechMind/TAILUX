import Banner from "../studio/Banner";
import Tag from "../studio/Tag";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormStepper from "./FormStepper";
import AliceCarousel from "react-alice-carousel";
import "./Studio.css";
import HeadPhone from "../layout/HeadPhone";
import { useDispatch } from "react-redux";
import { collectCustomProductData } from "../../actions/customProductActions";
import "./Step2.css";

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
      <div
        style={
          fabric === "fabric1"
            ? {
                flexDirection: "column",
                backgroundImage:
                  "url(http://localhost:3000/static/media/Fabric1.9dbb229b.png)",
              }
            : {}
        }
        onClick={() => setFabric("fabric1")}
      >
        <p style={fabric === "fabric1" ? { color: "black" } : {}}>
          BROCADE SILK
        </p>
        <p
          style={
            fabric === "fabric1" ? { display: "block" } : { display: "none" }
          }
        >
          SELECTED
        </p>
      </div>
    </div>,
    <div className="fabricBox">
      <div
        style={
          fabric === "fabric2"
            ? {
                flexDirection: "column",
                backgroundImage:
                  "url(http://localhost:3000/static/media/Fabric1.9dbb229b.png)",
              }
            : {}
        }
        onClick={() => setFabric("fabric2")}
      >
        <p style={fabric === "fabric2" ? { color: "black" } : {}}>
          CHINNAMON CHIFFON
        </p>
        <p
          style={
            fabric === "fabric2" ? { display: "block" } : { display: "none" }
          }
        >
          SELECTED
        </p>
      </div>
    </div>,
    <div className="fabricBox">
      <div
        style={
          fabric === "fabric3"
            ? {
                flexDirection: "column",
                backgroundImage:
                  "url(http://localhost:3000/static/media/Fabric1.9dbb229b.png)",
              }
            : {}
        }
        onClick={() => setFabric("fabric3")}
      >
        <p style={fabric === "fabric3" ? { color: "black" } : {}}>
          BROCADE SILK
        </p>
        <p
          style={
            fabric === "fabric3" ? { display: "block" } : { display: "none" }
          }
        >
          SELECTED
        </p>
      </div>
    </div>,
    <div className="fabricBox">
      <div
        style={
          fabric === "fabric4"
            ? {
                flexDirection: "column",
                backgroundImage:
                  "url(http://localhost:3000/static/media/Fabric1.9dbb229b.png)",
              }
            : {}
        }
        onClick={() => setFabric("fabric4")}
      >
        <p style={fabric === "fabric4" ? { color: "black" } : {}}>
          CHINNAMON CHIFFON
        </p>
        <p
          style={
            fabric === "fabric4" ? { display: "block" } : { display: "none" }
          }
        >
          SELECTED
        </p>
      </div>
    </div>,
    <div className="fabricBox">
      <div
        style={
          fabric === "fabric5"
            ? {
                flexDirection: "column",
                backgroundImage:
                  "url(http://localhost:3000/static/media/Fabric1.9dbb229b.png)",
              }
            : {}
        }
        onClick={() => setFabric("fabric5")}
      >
        <p style={fabric === "fabric5" ? { color: "black" } : {}}>
          BROCADE SILK
        </p>
        <p
          style={
            fabric === "fabric5" ? { display: "block" } : { display: "none" }
          }
        >
          SELECTED
        </p>
      </div>
    </div>,
    <div className="fabricBox">
      <div
        style={
          fabric === "fabric6"
            ? {
                flexDirection: "column",
                backgroundImage:
                  "url(http://localhost:3000/static/media/Fabric1.9dbb229b.png)",
              }
            : {}
        }
        onClick={() => setFabric("fabric6")}
      >
        <p style={fabric === "fabric6" ? { color: "black" } : {}}>
          CHINNAMON CHIFFON
        </p>
        <p
          style={
            fabric === "fabric6" ? { display: "block" } : { display: "none" }
          }
        >
          SELECTED
        </p>
      </div>
    </div>,
    <div className="fabricBox">
      <div
        style={
          fabric === "fabric7"
            ? {
                flexDirection: "column",
                backgroundImage:
                  "url(http://localhost:3000/static/media/Fabric1.9dbb229b.png)",
              }
            : {}
        }
        onClick={() => setFabric("fabric7")}
      >
        <p style={fabric === "fabric7" ? { color: "black" } : {}}>
          {" "}
          BROCADE SILK
        </p>
        <p
          style={
            fabric === "fabric7" ? { display: "block" } : { display: "none" }
          }
        >
          SELECTED
        </p>
      </div>
    </div>,
  ];

  const fabrics2 = [
    <div className="fabricBox">
      <div
        style={
          pattern === "pattern1"
            ? {
                flexDirection: "column",
                backgroundImage:
                  "url(http://localhost:3000/static/media/Fabric1.9dbb229b.png)",
              }
            : {}
        }
        onClick={() => setPattern("pattern1")}
      >
        <p style={pattern === "pattern1" ? { color: "black" } : {}}>
          BROCADE SILK
        </p>
        <p
          style={
            pattern === "pattern1" ? { display: "block" } : { display: "none" }
          }
        >
          SELECTED
        </p>
      </div>
    </div>,
    <div className="fabricBox">
      <div
        style={
          pattern === "pattern2"
            ? {
                flexDirection: "column",
                backgroundImage:
                  "url(http://localhost:3000/static/media/Fabric1.9dbb229b.png)",
              }
            : {}
        }
        onClick={() => setPattern("pattern2")}
      >
        <p style={pattern === "pattern2" ? { color: "black" } : {}}>
          CHINNAMON CHIFFON
        </p>
        <p
          style={
            pattern === "pattern2" ? { display: "block" } : { display: "none" }
          }
        >
          SELECTED
        </p>
      </div>
    </div>,
    <div className="fabricBox">
      <div
        style={
          pattern === "pattern3"
            ? {
                flexDirection: "column",
                backgroundImage:
                  "url(http://localhost:3000/static/media/Fabric1.9dbb229b.png)",
              }
            : {}
        }
        onClick={() => setPattern("pattern3")}
      >
        <p style={pattern === "pattern3" ? { color: "black" } : {}}>
          BROCADE SILK
        </p>
        <p
          style={
            pattern === "pattern3" ? { display: "block" } : { display: "none" }
          }
        >
          SELECTED
        </p>
      </div>
    </div>,
    <div className="fabricBox">
      <div
        style={
          pattern === "pattern4"
            ? {
                flexDirection: "column",
                backgroundImage:
                  "url(http://localhost:3000/static/media/Fabric1.9dbb229b.png)",
              }
            : {}
        }
        onClick={() => setPattern("pattern4")}
      >
        <p style={pattern === "pattern4" ? { color: "black" } : {}}>
          CHINNAMON CHIFFON
        </p>
        <p
          style={
            pattern === "pattern4" ? { display: "block" } : { display: "none" }
          }
        >
          SELECTED
        </p>
      </div>
    </div>,
    <div className="fabricBox">
      <div
        style={
          pattern === "pattern5"
            ? {
                flexDirection: "column",
                backgroundImage:
                  "url(http://localhost:3000/static/media/Fabric1.9dbb229b.png)",
              }
            : {}
        }
        onClick={() => setPattern("pattern5")}
      >
        <p style={pattern === "pattern5" ? { color: "black" } : {}}>
          BROCADE SILK
        </p>
        <p
          style={
            pattern === "pattern5" ? { display: "block" } : { display: "none" }
          }
        >
          SELECTED
        </p>
      </div>
    </div>,
    <div className="fabricBox">
      <div
        style={
          pattern === "pattern6"
            ? {
                flexDirection: "column",
                backgroundImage:
                  "url(http://localhost:3000/static/media/Fabric1.9dbb229b.png)",
              }
            : {}
        }
        onClick={() => setPattern("pattern6")}
      >
        <p style={pattern === "pattern6" ? { color: "black" } : {}}>
          CHINNAMON CHIFFON
        </p>
        <p
          style={
            pattern === "pattern6" ? { display: "block" } : { display: "none" }
          }
        >
          SELECTED
        </p>
      </div>
    </div>,
    <div className="fabricBox">
      <div
        style={
          pattern === "pattern7"
            ? {
                flexDirection: "column",
                backgroundImage:
                  "url(http://localhost:3000/static/media/Fabric1.9dbb229b.png)",
              }
            : {}
        }
        onClick={() => setPattern("pattern7")}
      >
        <p style={pattern === "pattern7" ? { color: "black" } : {}}>
          BROCADE SILK
        </p>
        <p
          style={
            pattern === "pattern7" ? { display: "block" } : { display: "none" }
          }
        >
          SELECTED
        </p>
      </div>
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
