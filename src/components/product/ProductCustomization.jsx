import React, { Fragment } from "react";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import AliceCarousel from "react-alice-carousel";

import Women1 from "../../assets/images/Women1.png";
import Women2 from "../../assets/images/Women2.png";
import Women3 from "../../assets/images/Women3.png";
import Women4 from "../../assets/images/Women4.png";

import Person1 from "../../assets/images/Person1.svg";
import Person2 from "../../assets/images/Person2.svg";
import Person3 from "../../assets/images/Person3.svg";

import WishlistIcon2 from "../../assets/images/WishlistIcon2.svg";
import Star1 from "../../assets/images/Star1.svg";

import "./ProductCustomization.css";
import { Link } from "react-router-dom";

const ProductCustomization = () => {
  const womens = [
    <div className="womenBox">
      <img src={Women1} alt="Women1" />
      <div>
        <p>Plunge Floral Print</p>
        <p>Georgette Dress</p>
        <p>
          <span>₹1999</span>
          <span>₹1999</span>
        </p>
      </div>
    </div>,
    <div className="womenBox">
      <img src={Women2} alt="Women2" />
      <div>
        <p>Landscape Print</p>
        <p>Belted Shirtdress</p>
        <p>
          <span>₹1999</span> <span>₹1999</span>
        </p>
      </div>
    </div>,
    <div className="womenBox">
      <img src={Women3} alt="Women3" />
      <div>
        <p>Lattice Floral Print</p>
        <p>Cotton Linen Dress</p>
        <p>
          <span>₹1999</span> <span>₹1999</span>
        </p>
      </div>
    </div>,
    <div className="womenBox">
      <img src={Women4} alt="Women4" />
      <div>
        <p>Shadow Ombre Print</p>
        <p>Georgette Skirt</p>
        <p>
          <span>₹1999</span>
          <span>₹1999</span>
        </p>
      </div>
    </div>,
    <div className="womenBox">
      <img src={Women1} alt="Women1" />
      <div>
        <p>Plunge Floral Print</p>
        <p>Georgette Dress</p>
        <p>
          <span>₹1999</span> <span>₹1999</span>
        </p>
      </div>
    </div>,
    <div className="womenBox">
      <img src={Women2} alt="Women2" />
      <div>
        <p>Landscape Print</p>
        <p>Belted Shirtdress</p>
        <p>
          <span>₹1999</span> <span>₹1999</span>
        </p>
      </div>
    </div>,
  ];

  return (
    <Fragment>
      <Navbar />

      <div className="ProductCustomizeContainer">
        <p>Customize</p>

        <div className="pb-3">
          <div>
            <div className="productDetails">
              <div>
                <img src={Women1} alt="Women1" />
              </div>
              <div>
                <p className="productName">
                  Plunge Floral Print
                  <br />
                  Georgette Dress
                </p>

                <p className="productPrice">
                  <span>₹1999</span>
                  <span>
                    MRP&nbsp;<span>₹1999</span>
                  </span>

                  <div className="allCenter">
                    <span>4.1</span>
                    <img src={Star1} alt="Star1" />
                    <span>2.6k Ratings</span>
                  </div>
                </p>

                <p>inclusive of all taxes</p>

                <div>
                  <select name="" id="">
                    <option value="QTY:1">QTY:1</option>
                    <option value="QTY:2">QTY:2</option>
                    <option value="QTY:3">QTY:3</option>
                  </select>

                  <img src={WishlistIcon2} alt="WishlistIcon2" />
                </div>

                <div className="productSize">
                  <p className="text12">
                    <Link to="/">SIZE CHART &nbsp;&rsaquo;</Link>
                  </p>
                  <div>
                    <button>XS</button>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                    <button>XXL</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="aboutProduct">
              <p className="heading3">ABOUT THE PRODUCT</p>
              <div>
                <p className="text5 my-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </p>

                <p className="text5 my-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </p>

                <div>
                  <div>
                    <div className="mb-2">
                      <p className="text6">Size & Fit</p>
                      <p className="text7">Regular Fit</p>
                      <p className="text7">The model (height 6') is wearing a size 40</p>
                    </div>

                    <div>
                      <p className="text6"> Material & Care</p>
                      <p className="text7"> Material: CottonMachine Wash</p>
                    </div>
                  </div>

                  <div>
                    <p>
                      <p className="text9 mb-2">Specifications</p>
                      <div className="specificationBox">
                        <div>
                          <p className="text8">Sleeve Length</p>
                          <p className="text7 mb-2">Long Sleeves</p>
                          <p className="text8">Collar</p>
                          <p className="text7">Spread Collar</p>
                        </div>
                        <div>
                          <p className="text8">Fit</p>
                          <p className="text7 mb-2">Regular Fit</p>
                          <p className="text8">Length</p>
                          <p className="text7 mb-2">Regular</p>
                        </div>
                        <div>
                          <p className="text8">Pattern Type</p>
                          <p className="text7 mb-2">Solid</p>
                          <p className="text8">Occasion</p>
                          <p className="text7 mb-2">Casual</p>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="costomizeBox">
            <p>Customized Size and Fitting</p>
            <p>Select from a saved size or add new size</p>
            <p className="text13">Saved Sizes</p>

            <div className="savedSizes">
              <div>
                <img src={Person1} alt="Person1" />
                <p className="text14">Manju</p>
              </div>
              <div>
                <img src={Person2} alt="Person2" />
                <p className="text14">Anju</p>
              </div>
              <div>
                <img src={Person3} alt="Person3" />
                <p className="text14">Anjali</p>
              </div>
              <div>
                <p>+</p>
                <p className="text14">add new size</p>
              </div>
            </div>

            <p className="text13">Select Colors</p>

            <div className="selectColor">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>

            <button className="addToBagBtn">ADD TO BAG</button>

            <p>Want to Customize more?</p>

            <p>Open TailuX Studio to CUSTOMIZE each and every element of this product</p>

            <button className="openInTailuxStudioBtn">OPEN IN TAILUX STUDIO</button>

            <p>What is TailuX studio? </p>

            <p>
              TailuX Studio is a feature that allows users to customize their fashion products online in an efficient way. It enables users to become
              their own fashion designer by providing tools and options to customize their clothing according to their preferences and style. With
              TailuX Studio, users can select fabrics, colors, patterns, and other design elements to create unique clothing designs.{" "}
            </p>
          </div>
        </div>

        <p className="heading1">SOME MORE LIKE THESE </p>
        <AliceCarousel mouseTracking items={womens} slideBy="page" autoWidth disableButtonsControls disableDotsControls />
      </div>

      <Footer />
    </Fragment>
  );
};

export default ProductCustomization;
