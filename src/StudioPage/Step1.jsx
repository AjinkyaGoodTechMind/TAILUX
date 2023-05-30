import React, { useEffect, useState } from "react";
import Banner from "../components/studio/Banner";
import Tag from "../components/studio/Tag";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";
import { useNavigate } from "react-router-dom";
import FormStepper from "./FormStepper";
import "./Studio.css";
import "./Step1.css";
import HeadPhone from "../components/layout/HeadPhone";
import { useDispatch } from "react-redux";
import { collectCustomProductData } from "../actions/customProductActions";

function Step1() {
  const [category, setCategory] = useState();
  const [product, setProduct] = useState();
  const [designName, setDesignName] = useState();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const submitData = () => {
    if (!category || !product || !designName) {
      return alert("Fill all Required data");
    }
    dispatch(collectCustomProductData({ category, product, designName }));
    navigate("/step2");
  };

  return (
    <div id="Step-All-StudioPage">
      <Navbar />
      <Banner />
      <Tag />

      {/* Stepper */}
      <FormStepper active={0} />

      <div id="Content">
        <h3 className="Content-h1">Select The Product to Customize</h3>
        <h5 className="Content-h3">Select Category</h5>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option placeholder="" value={undefined}>
            Choose category
          </option>
          <option value="men">MEN</option>
          <option value="women">WOMEN</option>
          <option value="kids">KIDS</option>
        </select>
        <h5 className="Content-h3">Select product to Customize</h5>
        <select onChange={(e) => setProduct(e.target.value)}>
          <option placeholder="" value={undefined}>
            Choose product
          </option>
          <option value="Formal Shirt">Formal Shirt</option>
          <option value="Formal Paint">Formal Paint</option>
        </select>
        <h5 className="Content-h3">Name your Design</h5>
        <input
          style={{ outline: "none" }}
          type="text"
          name="NameDesign"
          id="NameDesign"
          placeholder="Type name here..."
          onChange={(e) => setDesignName(e.target.value)}
        />
        <button id="Step1-button">Save</button>
      </div>

      <div className="Buttons">
        <button id="next" onClick={submitData}>
          NEXT
        </button>
      </div>
      <HeadPhone />
      <Footer />
    </div>
  );
}

export default Step1;
