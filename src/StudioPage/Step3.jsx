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

        <h5 className="Content-h3">Classics</h5>
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
