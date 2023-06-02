import React from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "../../../assets/images/FacebookIcon.svg";
import InstaIcon from "../../../assets/images/InstaIcon.svg";
import PinteretsIcon from "../../../assets/images/PinterestIcon.svg";
import TwitterIcon from "../../../assets/images/TwitterIcon.svg";

import AppleStore from "../../../assets/images/AppleStore.svg";
import PlayStore from "../../../assets/images/PlayStore.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="contactUs">
          <p>Contact Us</p>
          <p>+910000000000</p>
          <a href="mailto:tailux@gmail.com">
            Wirte to: <br />
            tailux@gmail.com
          </a>
          <Link to="/">Help</Link>
        </div>

        <div className="orders">
          <p>Orders</p>
          <Link to="/">Customized Products</Link>
          <Link to="/">Payments & Shipping</Link>
          <Link to="/">Returns & Refunds</Link>
          <Link to="/">Privacy Policy</Link>
        </div>

        <div className="about">
          <p>About</p>
          <Link to="/">How customization works</Link>
          <Link to="/">Size Charts</Link>
          <Link to="/">How to measure</Link>
          <Link to="/">Customer Reviews</Link>
        </div>

        <div className="socialMedia">
          <div>
            <Link to="/">
              <img
                className="facebookIcon"
                src={FacebookIcon}
                alt="FacebookIcon"
              />
            </Link>
            <Link to="/">
              <img src={InstaIcon} alt="InstaIcon" />
            </Link>
            <Link to="/">
              <img src={PinteretsIcon} alt="PinteretsIcon" />
            </Link>
            <Link to="/">
              <img src={TwitterIcon} alt="TwitterIcon" />
            </Link>
          </div>
          <div>
            <Link to="/">
              <img src={AppleStore} alt="AppleStore" />
            </Link>
            <Link to="/">
              <img src={PlayStore} alt="PlayStore" />
            </Link>
          </div>
        </div>
      </div>

      <p>@Copyright 2023 TailuX</p>
    </footer>
  );
};

export default Footer;
