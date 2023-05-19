import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo.svg";
import SearchIcon from "../../../assets/images/SearchIcon.svg";
import ProfileIcon from "../../../assets/images/ProfileIcon.svg";
import WishlistIcon from "../../../assets/images/WishlistIcon.svg";
import BagIcon from "../../../assets/images/BagIcon.svg";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.user);

  return (
    <div className="nav">
      <div className="d-flex">
        <Link to='/'>
        <img className="navLogo me-5" src={Logo} alt="Tailux" />
        </Link>
        <div className="categoryLink">
          <div>
            <Link to="/men">MEN</Link>
          </div>
          <div>
            <Link to="/women">WOMEN</Link>
          </div>
          <div>
            <Link to="/kids">KIDS</Link>
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
