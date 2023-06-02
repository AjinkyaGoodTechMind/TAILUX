import React, { useState } from "react";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Banner from "../studio/Banner";
import Tag from "../studio/Tag";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import FormStepper from "./FormStepper";
import HeadPhone from "../layout/HeadPhone";

import Collar1 from "../../assets/images/Collar1.svg";
import { collectCustomProductData } from "../../actions/customProductActions";
import "./Studio.css";
import "./Step5.css";

export default function Step5() {
  const [collarStyle, setCollarStyle] = useState();
  const [buttonsStyle, setButtonsStyle] = useState();

  const navigate = useNavigate();
  const Previous = useNavigate();

  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 3,
  };

  const submitData = () => {
    if (!collarStyle) {
      return alert("Select Collar style");
    }

    if (!buttonsStyle) {
      return alert("Select Buttons style");
    }

    dispatch(collectCustomProductData({ collarStyle, buttonsStyle }));
    navigate("/FinalStep");
  };

  return (
    <div id="Step-All-StudioPage">
      <Navbar />
      <Banner />
      <Tag />
      <FormStepper active={4} />
      <div id="Content">
        <h3 className="Content-h1">Last step, Add detailing to your Item.</h3>
        <h5 className="Content-h3">Collar style</h5>
        <CollarStyles
          collarStyle={collarStyle}
          setCollarStyle={setCollarStyle}
          settings={settings}
        />
        <h5 className="Content-h3">Buttons style</h5>
        <ButtonsStyles
          buttonsStyle={buttonsStyle}
          setButtonsStyle={setButtonsStyle}
          settings={settings}
        />
      </div>
      <div className="Buttons">
        <button id="previous" onClick={() => Previous("/step4")}>
          Previous
        </button>
        <button id="next" onClick={submitData}>
          Next
        </button>
      </div>
      <HeadPhone />
      <Footer />
    </div>
  );
}

const CollarStyles = ({ collarStyle, setCollarStyle, settings }) => {
  return (
    <div className="carousel-Collar1">
      <Slider {...settings}>
        <div className="collarBox">
          <div
            onClick={() => setCollarStyle("collar1")}
            style={
              collarStyle === "collar1" ? { border: "8px solid black" } : {}
            }
          >
            <img draggable={false} src={Collar1} alt="Collar1" />
          </div>
          <p>style 1</p>
        </div>
        <div className="collarBox">
          <div
            onClick={() => setCollarStyle("collar2")}
            style={
              collarStyle === "collar2" ? { border: "8px solid black" } : {}
            }
          >
            <img draggable={false} src={Collar1} alt="Collar1" />
          </div>
          <p>style 1</p>
        </div>
        <div className="collarBox">
          <div
            onClick={() => setCollarStyle("collar3")}
            style={
              collarStyle === "collar3" ? { border: "8px solid black" } : {}
            }
          >
            <img draggable={false} src={Collar1} alt="Collar1" />
          </div>
          <p>style 1</p>
        </div>
        <div className="collarBox">
          <div
            onClick={() => setCollarStyle("collar4")}
            style={
              collarStyle === "collar4" ? { border: "8px solid black" } : {}
            }
          >
            <img draggable={false} src={Collar1} alt="Collar1" />
          </div>
          <p>style 1</p>
        </div>
        <div className="collarBox">
          <div
            onClick={() => setCollarStyle("collar5")}
            style={
              collarStyle === "collar5" ? { border: "8px solid black" } : {}
            }
          >
            <img draggable={false} src={Collar1} alt="Collar1" />
          </div>
          <p>style 1</p>
        </div>
        <div className="collarBox">
          <div
            onClick={() => setCollarStyle("collar6")}
            style={
              collarStyle === "collar6" ? { border: "8px solid black" } : {}
            }
          >
            <img draggable={false} src={Collar1} alt="Collar1" />
          </div>
          <p>style 1</p>
        </div>
      </Slider>
    </div>
  );
};

const ButtonsStyles = ({ buttonsStyle, setButtonsStyle, settings }) => {
  return (
    <div className="carousel-Collar1">
      <Slider {...settings}>
        <div className="collarBox">
          <div
            onClick={() => setButtonsStyle("button1")}
            style={
              buttonsStyle === "button1" ? { border: "8px solid black" } : {}
            }
          >
            <img draggable={false} src={Collar1} alt="Collar1" />
          </div>
          <p>style 1</p>
        </div>
        <div className="collarBox">
          <div
            onClick={() => setButtonsStyle("button2")}
            style={
              buttonsStyle === "button2" ? { border: "8px solid black" } : {}
            }
          >
            <img draggable={false} src={Collar1} alt="Collar1" />
          </div>
          <p>style 1</p>
        </div>
        <div className="collarBox">
          <div
            onClick={() => setButtonsStyle("button3")}
            style={
              buttonsStyle === "button3" ? { border: "8px solid black" } : {}
            }
          >
            <img draggable={false} src={Collar1} alt="Collar1" />
          </div>
          <p>style 1</p>
        </div>
        <div className="collarBox">
          <div
            onClick={() => setButtonsStyle("button4")}
            style={
              buttonsStyle === "button4" ? { border: "8px solid black" } : {}
            }
          >
            <img draggable={false} src={Collar1} alt="Collar1" />
          </div>
          <p>style 1</p>
        </div>
        <div className="collarBox">
          <div
            onClick={() => setButtonsStyle("button5")}
            style={
              buttonsStyle === "button5" ? { border: "8px solid black" } : {}
            }
          >
            <img draggable={false} src={Collar1} alt="Collar1" />
          </div>
          <p>style 1</p>
        </div>
        <div className="collarBox">
          <div
            onClick={() => setButtonsStyle("button6")}
            style={
              buttonsStyle === "button6" ? { border: "8px solid black" } : {}
            }
          >
            <img draggable={false} src={Collar1} alt="Collar1" />
          </div>
          <p>style 1</p>
        </div>
        <div className="collarBox">
          <div
            onClick={() => setButtonsStyle("button7")}
            style={
              buttonsStyle === "button7" ? { border: "8px solid black" } : {}
            }
          >
            <img draggable={false} src={Collar1} alt="Collar1" />
          </div>
          <p>style 1</p>
        </div>
        <div className="collarBox">
          <div
            onClick={() => setButtonsStyle("button8")}
            style={
              buttonsStyle === "button8" ? { border: "8px solid black" } : {}
            }
          >
            <img draggable={false} src={Collar1} alt="Collar1" />
          </div>
          <p>style 1</p>
        </div>
        <div className="collarBox">
          <div
            onClick={() => setButtonsStyle("button9")}
            style={
              buttonsStyle === "button9" ? { border: "8px solid black" } : {}
            }
          >
            <img draggable={false} src={Collar1} alt="Collar1" />
          </div>
          <p>style 1</p>
        </div>
      </Slider>
    </div>
  );
};
