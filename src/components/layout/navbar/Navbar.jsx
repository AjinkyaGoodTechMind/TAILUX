import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo.svg";
import SearchIcon from "../../../assets/images/SearchIcon.svg";
import ProfileIcon from "../../../assets/images/ProfileIcon.svg";
import WishlistIcon from "../../../assets/images/WishlistIcon.svg";
import BagIcon from "../../../assets/images/BagIcon.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="d-flex">
        <img className="navLogo me-5" src={Logo} alt="Tailux" />
        <div className="categoryLink">
          <div>
            <Link to="/">MEN</Link>
          </div>
          <div>
            <Link to="/">WOMEN</Link>
          </div>
          <div>
            <Link to="/">KIDS</Link>
          </div>
          <div className="TailuXStudioLink">
            <Link to="/tailuxStudio">TailuX Studio</Link>
          </div>
        </div>
      </div>

      <div className="searchBar">
        <img src={SearchIcon} alt="" />
        <input type="text" placeholder="Search for products, brands and more" />
      </div>

      <div className="rightSide">
        <div>
          <Link to="/login">
            <div>
              <img src={ProfileIcon} alt="ProfileIcon" />
              <p>Profile</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <div>
              <img src={WishlistIcon} alt="WishlistIcon" />
              <p>Wishlist</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <div>
              <img src={BagIcon} alt="BagIcon" />
              <p>Bag</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
