import Banner from "../components/studio/Banner";
import Tag from "../components/studio/Tag";
import Content from "../components/studio/Content";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";
import { useNavigate } from "react-router-dom";
import "./Studio.css";

function Step1() {
  const navigate = useNavigate();
  return (
    <div id="Step-All-StudioPage">
      <Navbar />
      <Banner />
      <Tag />
      <div id="StudioPage-Step-1"></div>
      <Content />
      <div className="Buttons">
        <button id="next" onClick={() => navigate("/step2")}>
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Step1;
