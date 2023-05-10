import Banner from "../components/studio/Banner";
import Tag from "../components/studio/Tag";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";
import { useNavigate } from "react-router-dom";
import "./Studio.css";

export default function Step4b() {
  const navigate = useNavigate();
  const Previous = useNavigate();
  const Step4B = useNavigate();

  return (
    <div id="Step-All-StudioPage">
      <Navbar />
      <Banner />
      <Tag />
      <div id="StudioPage-Step-4"></div>
      <div id="Content">
        <h1 className="Content-h1">Select Size & Fitting</h1>

        <div id="Size-fit">
          <div className="form demoSize1">
            <div className="user"></div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Type Name here..."
              value="Manju"
              style={{
                width: "40%",
                marginTop: "30px",
                fontWeight: "bold",
                border: "none",
                fontSize: "2rem",
                textAlign: "center",
              }}
            />
            <div className="shirt">
              <form className="sizeForm" id="User-size" action="">
                <div id="left">
                  <label htmlFor="shoulder">Shoulder</label>
                  <input type="number" id="shoulder demo-display" name="shoulder" value={1} disabled />
                  <label htmlFor="chest ">Chest</label>
                  <input type="number" id="chest demo-display" name="chest" value={1} disabled />
                  <label htmlFor="waist">Waist</label>
                  <input type="number" id="waist demo-display" name="waist" value={1} disabled />
                </div>
                <div id="right">
                  <label htmlFor="back length">Back Length</label>
                  <input type="number" id="backLength demo-display" name="back length" value={1} disabled />
                  <label htmlFor="sleeves">Sleeve</label>
                  <input type="number" id="sleeves demo-display" name="sleeves" value={1} disabled />
                  <label htmlFor="neck">Neck</label>
                  <input type="number" id="neck demo-display" name="neck" value={1} disabled />
                </div>
              </form>
            </div>
            <div className="pant">
              <form className="sizeForm" id="User-size" action="">
                <div id="left">
                  <label htmlFor="waist">Waist</label>
                  <input type="number" id="waist demo-display" name="waist" value={1} disabled />
                  <label htmlFor="length">Length</label>
                  <input type="number" id="length demo-display" name="length" value={1} disabled />
                  <label htmlFor="inseam">Inseam</label>
                  <input type="number" id="inseam demo-display" name="inseam" value={1} disabled />
                </div>
                <div id="right">
                  <label htmlFor="waist2crotch">Waist to Crotch</label>
                  <input type="number" id="waist2crotch demo-display" name="waist2crotch" value={1} disabled />
                  <label htmlFor="upperlegwidth">Upper Leg Width</label>
                  <input type="number" id="upperlegwidth demo-display" name="upperlegwidth" value={1} disabled />
                  <label htmlFor="LowerlegWidth">Lower Leg Width</label>
                  <input type="number" id="LowerlegWidth demo-display" name="LowerlegWidth" value={1} disabled />
                </div>
              </form>
            </div>
            <button type="submit" id="addBtn">
              Selected
            </button>
          </div>
        </div>

        <div id="Add-Style" onClick={() => Step4B("/step4b")}>
          <div>+</div>
          <span>Add Style</span>
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
