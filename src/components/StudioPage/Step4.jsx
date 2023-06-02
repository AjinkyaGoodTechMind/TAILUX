import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Banner from "../studio/Banner";
import Tag from "../studio/Tag";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import FormStepper from "./FormStepper";
import HeadPhone from "../layout/HeadPhone";

import ProfileIcon2 from "../../assets/images/ProfileIcon2.svg";
import ShirtIcon1 from "../../assets/images/ShirtIcon1.svg";
import PantIcon1 from "../../assets/images/PantIcon1.svg";
import DeleteIcon1 from "../../assets/images/DeleteIcon1.svg";
import EditIcon1 from "../../assets/images/EditIcon1.svg";

import { collectCustomProductData } from "../../actions/customProductActions";
import { userSizes } from "../../actions/sizeActions";

import "./Step4.css";
import "./Studio.css";

export default function Step4b() {
  const navigate = useNavigate();
  const Previous = useNavigate();

  const dispatch = useDispatch();

  const { sizes } = useSelector((state) => state.sizes);

  useEffect(() => {
    dispatch(userSizes());
  }, []);

  const [state, setState] = useState(true);
  const [inputStyle, setInputStyle] = useState();
  const [customSize, setCustomSize] = useState();

  const editSizesFun = () => {
    setState(false);
    setInputStyle({
      background: " #E8E8E8",
      border: "1px solid #ADADAD",
      borderRadius: "4px",
      color: "#3A3A3A",
    });
  };

  const saveSizeFun = () => {
    setState(true);
    setInputStyle();
  };

  const sizesCancelFun = () => {
    setState(true);
    setInputStyle();
  };

  const submitData = () => {
    if (!customSize) {
      return alert("Select a size");
    }

    dispatch(
      collectCustomProductData({
        customSize: customSize.customSize,
        sizeName: customSize.sizeName,
      })
    );
    navigate("/step5");
  };

  return (
    <div id="Step-All-StudioPage">
      <Navbar />
      <Banner />
      <Tag />
      <FormStepper active={3} />
      <div id="Content">
        <h3 className="Content-h1">Select Size & Fitting</h3>

        <div>
          <div className="mySizesContainer">
            <UserSizes
              setCustomSize={setCustomSize}
              customSize={customSize}
              state={state}
              saveSizeFun={saveSizeFun}
              sizesCancelFun={sizesCancelFun}
              inputStyle={inputStyle}
              setInputStyle={setInputStyle}
              editSizesFun={editSizesFun}
              sizes={sizes}
            />
          </div>
        </div>
      </div>
      <div className="Buttons">
        <button id="previous" onClick={() => Previous("/step3")}>
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

const UserSizes = ({
  state,
  customSize,
  setCustomSize,
  saveSizeFun,
  sizesCancelFun,
  editSizesFun,
  inputStyle,
  sizes,
}) => {
  return (
    <div>
      {sizes &&
        sizes.map((size, key) => (
          <div key={key} className="sizeBox">
            <div>
              <div>
                <img src={ProfileIcon2} alt="ProfileIcon2" />
              </div>
              <p className="text19b">{size.name}</p>
            </div>

            <img src={ShirtIcon1} alt="ShirtIcon1" />

            <div className="shirtSizeBox">
              <div>
                <div>
                  <label htmlFor="">Shoulder </label>
                  <input
                    style={inputStyle}
                    disabled={state}
                    type="text"
                    value="1cm"
                  />
                </div>

                <div>
                  <label htmlFor="">Chest</label>
                  <input
                    style={inputStyle}
                    disabled={state}
                    type="text"
                    value={"2cm"}
                  />
                </div>

                <div>
                  <label htmlFor="">Waist</label>
                  <input
                    style={inputStyle}
                    disabled={state}
                    type="text"
                    value={"3cm"}
                  />
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="">Back Length</label>
                  <input
                    style={inputStyle}
                    disabled={state}
                    type="text"
                    value={"1cm"}
                  />
                </div>

                <div>
                  <label htmlFor="">Sleeve</label>
                  <input
                    style={inputStyle}
                    disabled={state}
                    type="text"
                    value={"2cm"}
                  />
                </div>

                <div>
                  <label htmlFor="">Neck</label>
                  <input
                    style={inputStyle}
                    disabled={state}
                    type="text"
                    value={"3cm"}
                  />
                </div>
              </div>
            </div>

            <img src={PantIcon1} alt="" />

            <div className="pantSizeBox">
              <div>
                <div>
                  <label htmlFor="">Waist</label>
                  <input
                    style={inputStyle}
                    disabled={state}
                    type="text"
                    value="1cm"
                  />
                </div>

                <div>
                  <label htmlFor="">Length</label>
                  <input
                    style={inputStyle}
                    disabled={state}
                    type="text"
                    value={"2cm"}
                  />
                </div>

                <div>
                  <label htmlFor="">Inseam</label>
                  <input
                    style={inputStyle}
                    disabled={state}
                    type="text"
                    value={"3cm"}
                  />
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="">Waist to Crotch</label>
                  <input
                    style={inputStyle}
                    disabled={state}
                    type="text"
                    value={"1cm"}
                  />
                </div>

                <div>
                  <label htmlFor="">Upper Leg Width</label>
                  <input
                    style={inputStyle}
                    disabled={state}
                    type="text"
                    value={"2cm"}
                  />
                </div>

                <div>
                  <label htmlFor="">Lower Leg Width</label>
                  <input
                    style={inputStyle}
                    disabled={state}
                    type="text"
                    value={"3cm"}
                  />
                </div>
              </div>
            </div>

            <button>
              <img src={DeleteIcon1} alt="DeleteIcon1" />
            </button>

            {(!customSize ||
              (customSize && customSize.customSize !== size._id)) && (
              <div style={state ? {} : { display: "none" }}>
                <button className="editBtn" onClick={editSizesFun}>
                  Edit
                  <img src={EditIcon1} alt="EditIcon1" />
                </button>

                <button
                  className="selectBtn"
                  onClick={() =>
                    setCustomSize({
                      customSize: size._id,
                      sizeName: size.name,
                    })
                  }
                >
                  Select
                </button>
              </div>
            )}

            <div
              style={
                customSize && customSize.customSize === size._id
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <button className="selectedBtn">Selected</button>
            </div>

            {!customSize && (
              <div style={state ? { display: "none" } : {}}>
                <button className="saveBtn" onClick={saveSizeFun}>
                  Save
                </button>
                <button className="cancelBtn" onClick={sizesCancelFun}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        ))}

      <div className="newSizeBox">
        <button className="newSizeBtn">+</button>
        <p>add new size</p>
      </div>
    </div>
  );
};
