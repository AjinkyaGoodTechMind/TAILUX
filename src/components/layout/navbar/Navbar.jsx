import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../../../assets/images/Logo.svg";
import SearchIcon from "../../../assets/images/SearchIcon.svg";
import ProfileIcon from "../../../assets/images/ProfileIcon.svg";
import WishlistIcon from "../../../assets/images/WishlistIcon.svg";
import BagIcon from "../../../assets/images/BagIcon.svg";
import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <div className="nav">
      <div className="d-flex">
        <Link to="/">
          <img className="navLogo" src={Logo} alt="Tailux" />
        </Link>
        <div className="categoryLink">
          <div>
            <Link to="/category/men">MEN</Link>
          </div>
          <div>
            <Link to="/category/women">WOMEN</Link>
          </div>
          <div>
            <Link to="/category/kids">KIDS</Link>
          </div>
          <div className="TailuXStudioLink">
            <Link to="/tailuxStudio">TailuX Studio</Link>
          </div>
        </div>
      </div>

      <div className="rightSide">
        <div className="searchBar">
          <img src={SearchIcon} alt="" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>

        {isAuthenticated ? (
          <>
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
          </>
        ) : (
          <>
            <div className="loginBtn">
              <Link to="/login">LOGIN</Link>
            </div>
            <div className="signupBtn">
              <Link to="/register">REGISTER</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
