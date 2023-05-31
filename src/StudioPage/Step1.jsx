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
import { useDispatch, useSelector } from "react-redux";
import { collectCustomProductData } from "../actions/customProductActions";
import { productsByCategory } from "../actions/productActions";
import Select from "react-select";

function Step1() {
  const [category, setCategory] = useState();
  const [product, setProduct] = useState();
  const [designName, setDesignName] = useState();

  const { products } = useSelector((state) => state.products);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const submitData = () => {
    if (!category || !product || !designName) {
      return alert("Fill all Required data");
    }

    dispatch(
      collectCustomProductData({
        product,
        designName,
      })
    );
    navigate("/step2");
  };

  useEffect(() => {
    dispatch(productsByCategory(category));
  }, [category]);

  const productOptions = products
    ? products.map((product) => ({
        value: product._id,
        label: product.name,
      }))
    : [];

  const categoryOptions = [
    {
      value: "men",
      label: "men",
    },
    {
      value: "women",
      label: "women",
    },
    {
      value: "kids",
      label: "kids",
    },
  ];

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

        <div className="categorySelect">
          <Select
            className="basic-single"
            classNamePrefix="Choose category"
            isSearchable={false}
            name="category"
            options={categoryOptions}
            onChange={(option) => setCategory(option.value)}
          />
        </div>
        <h5 className="Content-h3">Select product to Customize</h5>

        <div className="productSelect">
          <Select
            className="basic-single"
            classNamePrefix="select"
            isSearchable={true}
            name="product"
            options={productOptions}
            onChange={(option) => setProduct(option.value)}
          />
        </div>
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
