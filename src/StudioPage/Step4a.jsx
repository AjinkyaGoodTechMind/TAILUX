import Banner from "../components/studio/Banner";
import Tag from "../components/studio/Tag";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import ProfileIcon2 from "../assets/images/ProfileIcon2.svg";
import ShirtIcon1 from "../assets/images/ShirtIcon1.svg";
import PantIcon1 from "../assets/images/PantIcon1.svg";
import DeleteIcon1 from "../assets/images/DeleteIcon1.svg";
import EditIcon1 from "../assets/images/EditIcon1.svg";

import "./Step4a.css";
import "./Studio.css";
import FormStepper from "./FormStepper";

export default function Step4b() {
  const navigate = useNavigate();
  const Previous = useNavigate();
  const Step4B = useNavigate();

  const [state, setState] = useState(true);
  const [inputStyle, setInputStyle] = useState();

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
            <div>
              <div className="sizeBox">
                <div>
                  <div>
                    <img src={ProfileIcon2} alt="ProfileIcon2" />
                  </div>
                  <p className="text19b">Manju</p>
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

                <div>
                  <button
                    style={state ? {} : { display: "none" }}
                    onClick={editSizesFun}
                  >
                    Edit
                    <img src={EditIcon1} alt="EditIcon1" />
                  </button>

                  <button style={state ? {} : { display: "none" }}>
                    select
                  </button>
                </div>

                <div style={state ? { display: "none" } : {}}>
                  <button onClick={saveSizeFun}>Save</button>
                  <button onClick={sizesCancelFun}>Cancel</button>
                </div>
              </div>

              <div className="newSizeBox">
                <button className="newSizeBtn">+</button>
                <p>add new size</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Buttons">
        <button id="previous" onClick={() => Previous("/step3")}>
          Previous
        </button>
        <button id="next" onClick={() => navigate("/step5")}>
          Next
        </button>
      </div>

      <Footer />
    </div>
  );
}
