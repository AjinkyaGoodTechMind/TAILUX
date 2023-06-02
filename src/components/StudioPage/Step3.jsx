import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Banner from "../studio/Banner";
import Tag from "../studio/Tag";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import FormStepper from "./FormStepper";
import HeadPhone from "../layout/HeadPhone";

import { collectCustomProductData } from "../../actions/customProductActions";

import "./Step3.css";
import "./Studio.css";

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
    navigate("/step4");
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
        <DarkColors color={color} setColor={setColor} />

        <h5 className="Content-h3">Classics</h5>
        <ClassicColors color={color} setColor={setColor} />
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

const DarkColors = ({ color, setColor }) => {
  return (
    <div className="StudioPage-Select-Color">
      <button
        onClick={() => setColor("#790000")}
        style={color === "#790000" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#5a3c00")}
        style={color === "#5a3c00" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#003f79")}
        style={color === "#003f79" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#303030")}
        style={color === "#303030" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#4b0079")}
        style={color === "#4b0079" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#000000")}
        style={color === "#000000" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#582500")}
        style={color === "#582500" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("##630101")}
        style={color === "##630101" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#114508")}
        style={color === "#114508" ? { border: "8px solid black" } : {}}
      ></button>

      <button
        onClick={() => setColor("#114508")}
        style={color === "#114508" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("##630101")}
        style={color === "##630101" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#582500")}
        style={color === "#582500" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#000000")}
        style={color === "#000000" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#4b0079")}
        style={color === "#4b0079" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#303030")}
        style={color === "#303030" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#003f79")}
        style={color === "#003f79" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#5a3c00")}
        style={color === "#5a3c00" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#790000")}
        style={color === "#790000" ? { border: "8px solid black" } : {}}
      ></button>
    </div>
  );
};

const ClassicColors = ({ color, setColor }) => {
  return (
    <div className="StudioPage-Select-Color">
      <button
        onClick={() => setColor("#790000")}
        style={color === "#790000" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#5a3c00")}
        style={color === "#5a3c00" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#003f79")}
        style={color === "#003f79" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#303030")}
        style={color === "#303030" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#4b0079")}
        style={color === "#4b0079" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#000000")}
        style={color === "#000000" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#582500")}
        style={color === "#582500" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("##630101")}
        style={color === "##630101" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#114508")}
        style={color === "#114508" ? { border: "8px solid black" } : {}}
      ></button>

      <button
        onClick={() => setColor("#114508")}
        style={color === "#114508" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("##630101")}
        style={color === "##630101" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#582500")}
        style={color === "#582500" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#000000")}
        style={color === "#000000" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#4b0079")}
        style={color === "#4b0079" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#303030")}
        style={color === "#303030" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#003f79")}
        style={color === "#003f79" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#5a3c00")}
        style={color === "#5a3c00" ? { border: "8px solid black" } : {}}
      ></button>
      <button
        onClick={() => setColor("#790000")}
        style={color === "#790000" ? { border: "8px solid black" } : {}}
      ></button>
    </div>
  );
};
