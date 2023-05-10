import React, { Fragment, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from "../layout/navbar/Navbar";
import Women5 from "../../assets/images/Women5.png";
import { Carousel } from "react-responsive-carousel";
import WishlistIcon2 from "../../assets/images/WishlistIcon2.svg";
import { Link } from "react-router-dom";
import Footer from "../layout/footer/Footer";

import Women1 from "../../assets/images/Women1.png";
import Women2 from "../../assets/images/Women2.png";
import Women3 from "../../assets/images/Women3.png";
import Women4 from "../../assets/images/Women4.png";

import Star1 from "../../assets/images/Star1.svg";
import Star2 from "../../assets/images/Star2.svg";
import Truck1 from "../../assets/images/Truck1.svg";

import AliceCarousel from "react-alice-carousel";
import ProgressBar from "@ramonak/react-progress-bar";

import "./Product.css";

const Product = () => {
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
  ];

  const properties = {
    autoPlay: true,
    infinite: true,
    showFullscreenButton: false,
    thumbnailPosition: "left",
    useBrowserFullscreen: false,
    showPlayButton: false,
    showNav: false,
    height: "600px",
    // renderItem: this.myRenderItem.bind(this),

    items: [
      {
        original: Women5,
        thumbnail: Women5,
      },
      {
        original: Women5,
        thumbnail: Women5,
      },
      {
        original: Women5,
        thumbnail: Women5,
      },
    ],
  };

  return (
    <Fragment>
      <Navbar />

      <div className="productContainer">
        <div>
          <div>
            {/* Product Carousel */}

            <ImageGallery {...properties} style={{ display: "block" }} />

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

          <div className="rightSide">
            <div style={{ height: "820px" }}>
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

                <button>
                  <img src={WishlistIcon2} alt="" />
                </button>
              </p>

              <p>inclusive of all taxes</p>

              <div className="productSize">
                <p className="text12">
                  SIZE&nbsp;&nbsp;&nbsp;
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

              <div className="deliveryOption">
                <p className="text12">
                  Delivery Options&nbsp;&nbsp;&nbsp;
                  <img src={Truck1} alt="Truck1" />
                </p>
                <div>
                  <div>
                    <input placeholder="Enter pincode" type="text" />
                    <p>verify</p>
                    <span>Please enter PIN code to check delivery time & Pay on Delivery Availability</span>
                  </div>
                </div>
              </div>

              <div className="productColor">
                <p className="text12">COLOR</p>
                <div>
                  <button></button>
                  <button></button>
                  <button></button>
                  <button></button>
                  <button></button>
                  <button></button>
                </div>
              </div>

              <select name="" id="">
                <option value="QTY:1">QTY:1</option>
                <option value="QTY:2">QTY:2</option>
                <option value="QTY:3">QTY:3</option>
              </select>

              <Link to="/productCustomization" className="costomizeBtn">
                CUSTOMIZE
              </Link>
              <button className="addToBagBtn">ADD TO BAG</button>
            </div>

            <div className="mt-4 ratingsAndReviews">
              <p className="text10">Ratings & Reviews</p>
              <p className="my-3">
                <span>4.1</span>
                <img src={Star1} alt="Star1" />
              </p>

              <p>3.1k Verified Buyers</p>

              <div>
                <div>
                  <span className="text11">5</span>
                  <img src={Star2} alt={Star2} />
                  <div>
                    <ProgressBar isLabelVisible={false} bgColor={"#00C17C"} maxCompleted={3100} height="5px" completed={1800} />
                  </div>
                  <span className="text11">1.8K</span>
                </div>
                <div>
                  <span className="text11">4</span>
                  <img src={Star2} alt={Star2} />
                  <div>
                    <ProgressBar isLabelVisible={false} bgColor={"#008555"} maxCompleted={3100} height="5px" completed={900} />
                  </div>
                  <span className="text11">900</span>
                </div>
                <div>
                  <span className="text11">3</span>
                  <img src={Star2} alt={Star2} />
                  <div>
                    <ProgressBar isLabelVisible={false} bgColor={"#009BA5"} maxCompleted={3100} height="5px" completed={570} />
                  </div>
                  <span className="text11">570</span>
                </div>
                <div>
                  <span className="text11">2</span>
                  <img src={Star2} alt={Star2} />
                  <div>
                    <ProgressBar isLabelVisible={false} bgColor={"#FFB800"} maxCompleted={1000} height="5px" completed={231} />
                  </div>
                  <span className="text11">231</span>
                </div>
                <div>
                  <span className="text11">1</span>
                  <img src={Star2} alt={Star2} />
                  <div>
                    <ProgressBar isLabelVisible={false} bgColor={"#FF6D6D"} maxCompleted={3100} height="5px" completed={28} />
                  </div>
                  <span className="text11">28</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="heading3">MORE PRODUCTS ON:-</p>
          <div>
            <Link to="/">FROK</Link>
            <Link to="/">GREEN</Link>
            <Link to="/">TAILOR</Link>
          </div>
        </div>

        <div>
          <p className="heading1">SOME MORE LIKE THESE </p>
          <AliceCarousel mouseTracking items={womens} slideBy="page" autoWidth disableButtonsControls disableDotsControls />
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Product;
