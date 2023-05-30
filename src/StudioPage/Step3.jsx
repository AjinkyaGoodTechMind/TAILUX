import React, { useState } from "react";
import Banner from "../components/studio/Banner";
import Tag from "../components/studio/Tag";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";
import { useNavigate } from "react-router-dom";
import FormStepper from "./FormStepper";
import "./Step3.css";
import "./Studio.css";
import HeadPhone from "../components/layout/HeadPhone";
import { useDispatch } from "react-redux";
import { collectCustomProductData } from "../actions/customProductActions";

export default function Step3() {
  const [color, setColor] = useState();

  const navigate = useNavigate();
  const Previous = useNavigate();
  const dispatch = useDispatch();

  const submitData = () => {
    if (!color) {
      return alert("Please Select a Color");
    }
    dispatch(collectCustomProductData({ color }));
    navigate("/step4a");
  };

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
          <button
            onClick={() => setColor("color1")}
            style={color === "color1" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color2")}
            style={color === "color2" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color3")}
            style={color === "color3" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color4")}
            style={color === "color4" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color5")}
            style={color === "color5" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color6")}
            style={color === "color6" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color7")}
            style={color === "color7" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color8")}
            style={color === "color8" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color9")}
            style={color === "color9" ? { border: "4px solid black" } : {}}
          ></button>

          <button
            onClick={() => setColor("color10")}
            style={color === "color10" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color11")}
            style={color === "color11" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color12")}
            style={color === "color12" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color13")}
            style={color === "color13" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color14")}
            style={color === "color14" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color15")}
            style={color === "color15" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color16")}
            style={color === "color16" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color17")}
            style={color === "color17" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color18")}
            style={color === "color18" ? { border: "8px solid black" } : {}}
          ></button>
        </div>

        <h5 className="Content-h3">Classics</h5>
        <div className="StudioPage-Select-Color">
          <button
            onClick={() => setColor("color19")}
            style={color === "color19" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color20")}
            style={color === "color20" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color21")}
            style={color === "color21" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color22")}
            style={color === "color22" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color23")}
            style={color === "color23" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color24")}
            style={color === "color24" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color25")}
            style={color === "color25" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color26")}
            style={color === "color26" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color27")}
            style={color === "color27" ? { border: "8px solid black" } : {}}
          ></button>

          <button
            onClick={() => setColor("color28")}
            style={color === "color28" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color29")}
            style={color === "color29" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color30")}
            style={color === "color30" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color31")}
            style={color === "color31" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color32")}
            style={color === "color32" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color33")}
            style={color === "color33" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color34")}
            style={color === "color34" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color35")}
            style={color === "color35" ? { border: "8px solid black" } : {}}
          ></button>
          <button
            onClick={() => setColor("color36")}
            style={color === "color36" ? { border: "4px solid black" } : {}}
          ></button>
        </div>
      </div>
      <div className="Buttons">
        <button id="previous" onClick={() => Previous("/step2")}>
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
