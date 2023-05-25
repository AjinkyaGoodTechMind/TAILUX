import Banner from "../components/studio/Banner";
import Tag from "../components/studio/Tag";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";
import { useNavigate } from "react-router-dom";
import React from "react";
import Slider from "react-slick";
import "./Studio.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormStepper from "./FormStepper";

import Collar1 from "../assets/images/Collar1.svg";

import "./Step5.css";

export default function Step5() {
  const navigate = useNavigate();
  const Previous = useNavigate();

  const settings = {
    dots: true,
    infinite: false,
    // speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
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
        <div className="carousel-Collar1">
          <Slider {...settings}>
            <div className="collarBox">
              <div>
                <img draggable={false} src={Collar1} alt="Collar1" />
              </div>
              <p>style 1</p>
            </div>
            <div className="collarBox">
              <div>
                <img draggable={false} src={Collar1} alt="Collar1" />
              </div>
              <p>style 1</p>
            </div>
            <div className="collarBox">
              <div>
                <img draggable={false} src={Collar1} alt="Collar1" />
              </div>
              <p>style 1</p>
            </div>
            <div className="collarBox">
              <div>
                <img draggable={false} src={Collar1} alt="Collar1" />
              </div>
              <p>style 1</p>
            </div>
            <div className="collarBox">
              <div>
                <img draggable={false} src={Collar1} alt="Collar1" />
              </div>
              <p>style 1</p>
            </div>
            <div className="collarBox">
              <div>
                <img draggable={false} src={Collar1} alt="Collar1" />
              </div>
              <p>style 1</p>
            </div>
          </Slider>
        </div>
        <h5 className="Content-h3">Buttons style</h5>
        <div className="carousel-Collar1">
          <Slider {...settings}>
            <div className="collarBox">
              <div>
                <img draggable={false} src={Collar1} alt="Collar1" />
              </div>
              <p>style 1</p>
            </div>
            <div className="collarBox">
              <div>
                <img draggable={false} src={Collar1} alt="Collar1" />
              </div>
              <p>style 1</p>
            </div>
            <div className="collarBox">
              <div>
                <img draggable={false} src={Collar1} alt="Collar1" />
              </div>
              <p>style 1</p>
            </div>
            <div className="collarBox">
              <div>
                <img draggable={false} src={Collar1} alt="Collar1" />
              </div>
              <p>style 1</p>
            </div>
            <div className="collarBox">
              <div>
                <img draggable={false} src={Collar1} alt="Collar1" />
              </div>
              <p>style 1</p>
            </div>
            <div className="collarBox">
              <div>
                <img draggable={false} src={Collar1} alt="Collar1" />
              </div>
              <p>style 1</p>
            </div>
            <div className="collarBox">
              <div>
                <img draggable={false} src={Collar1} alt="Collar1" />
              </div>
              <p>style 1</p>
            </div>
            <div className="collarBox">
              <div>
                <img draggable={false} src={Collar1} alt="Collar1" />
              </div>
              <p>style 1</p>
            </div>
            <div className="collarBox">
              <div>
                <img draggable={false} src={Collar1} alt="Collar1" />
              </div>
              <p>style 1</p>
            </div>
          </Slider>
        </div>
      </div>
      <div className="Buttons">
        <button id="previous" onClick={() => Previous("/step4a")}>
          Previous
        </button>
        <button id="next" onClick={() => navigate("/")}>
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
}
