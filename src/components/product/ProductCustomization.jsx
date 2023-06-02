import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AliceCarousel from "react-alice-carousel";

import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";

import Women1 from "../../assets/images/Women1.png";
import Women2 from "../../assets/images/Women2.png";
import Women3 from "../../assets/images/Women3.png";
import Women4 from "../../assets/images/Women4.png";

import Person1 from "../../assets/images/Person1.svg";
import WishlistIcon2 from "../../assets/images/WishlistIcon2.svg";
import Star1 from "../../assets/images/Star1.svg";

import { productDetails } from "../../actions/productActions";
import { userSizes } from "../../actions/sizeActions";
import { addToCart } from "../../actions/cartActions";
import { collectCustomProductData } from "../../actions/customProductActions";
import { ADD_TO_CART_RESET } from "../../constants/cartConstants";
import "./ProductCustomization.css";

const ProductCustomization = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [customSize, setCustomSize] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.productDetails);
  const { user, isAuthenticated, userLoading = loading } = useSelector(
    (state) => state.user
  );
  const { cartAdded } = useSelector((state) => state.cart);
  const { sizes } = useSelector((state) => state.sizes);

  useEffect(() => {
    if (!isAuthenticated && userLoading === false) {
      navigate(`/product/${id}`);
      alert("Login to access this resource");
    }
    dispatch(productDetails(id));
    dispatch(userSizes());
  }, []);

  useEffect(() => {
    if (cartAdded) {
      alert("Product Added To Cart");
      dispatch({ type: ADD_TO_CART_RESET });
      setSize();
      setCustomSize();
      setColor();
      setQuantity(1);
    }
  }, [cartAdded]);

  // Add To Cart
  const addToBagHandler = () => {
    if (!size) return alert("Please select product size");
    if (!customSize) return alert("Please select your custom size");
    if (!color) return alert("Please select product color");

    dispatch(
      addToCart({
        user: user._id,
        product: id,
        quantity,
        size,
        color,
        customSize,
        customProduct: false,
      })
    );
  };

  // Customise product by tailux studio
  const customiseProduct = () => {
    dispatch(
      collectCustomProductData({
        product: product._id,
      })
    );
    navigate("/step2");
  };

  return (
    <Fragment>
      <Navbar />

      <div className="ProductCustomizeContainer">
        <p>Customize</p>

        {product ? (
          <div className="pb-3">
            <div>
              <div className="productDetails">
                <div>
                  <img
                    src={`http://localhost:5000/productImages/${product.images[0]}`}
                    alt="Women1"
                  />
                </div>
                <div>
                  <p className="productName">{product.name}</p>

                  <div className="productPrice">
                    <span>
                      {Math.floor(
                        product.price - (product.price * product.discount) / 100
                      )}
                    </span>
                    <span>
                      MRP&nbsp;<span>{product.price}</span>
                    </span>

                    <div className="allCenter">
                      <span>{product.ratings}</span>
                      <img src={Star1} alt="Star1" />
                      <span>{product.numOfReviews / 1000}k Ratings</span>
                    </div>
                  </div>

                  <p>inclusive of all taxes</p>

                  <div>
                    <select
                      onChange={(e) => setQuantity(e.target.value)}
                      name=""
                      id=""
                      value={quantity}
                    >
                      <option value={1}>QTY:1</option>
                      <option value={2}>QTY:2</option>
                      <option value={3}>QTY:3</option>
                    </select>

                    <img src={WishlistIcon2} alt="WishlistIcon2" />
                  </div>

                  <div className="productSize">
                    <ProductSizes
                      product={product}
                      size={size}
                      setSize={setSize}
                    />
                  </div>
                </div>
              </div>

              <div className="aboutProduct">
                <AboutProduct />
              </div>
            </div>

            <div className="customizeBox">
              <p>Customized Size and Fitting</p>
              <p>Select from a saved size or add new size</p>
              <p className="text13 mt-3">Saved Sizes</p>

              <UserSizes
                sizes={sizes}
                customSize={customSize}
                setCustomSize={setCustomSize}
              />

              <p className="text13 mt-3">Select Colors</p>

              <ProductColor color={color} setColor={setColor} />

              <button onClick={addToBagHandler} className="addToBagBtn">
                ADD TO BAG
              </button>

              <p>Want to Customize more?</p>

              <p>
                Open TailuX Studio to CUSTOMIZE each and every element of this
                product
              </p>

              <button
                onClick={customiseProduct}
                className="openInTailuxStudioBtn"
              >
                OPEN IN TAILUX STUDIO
              </button>

              <p>What is TailuX studio? </p>

              <p>
                TailuX Studio is a feature that allows users to customize their
                fashion products online in an efficient way. It enables users to
                become their own fashion designer by providing tools and options
                to customize their clothing according to their preferences and
                style. With TailuX Studio, users can select fabrics, colors,
                patterns, and other design elements to create unique clothing
                designs.{" "}
              </p>
            </div>
          </div>
        ) : (
          ""
        )}

        <p className="heading1">SOME MORE LIKE THESE </p>
        <SimilarProduct />
      </div>

      <Footer />
    </Fragment>
  );
};

export default ProductCustomization;

const ProductSizes = ({ product, size, setSize }) => {
  return (
    <>
      <p className="text12">
        <Link to="/">SIZE CHART &nbsp;&rsaquo;</Link>
      </p>
      <div>
        <button
          onClick={() => setSize("xs")}
          disabled={!product.sizes.includes("xs")}
          className={size === "xs" ? "sizeSelected" : ""}
        >
          XS
        </button>
        <button
          onClick={() => setSize("s")}
          disabled={!product.sizes.includes("s")}
          className={size === "s" ? "sizeSelected" : ""}
        >
          S
        </button>
        <button
          onClick={() => setSize("m")}
          disabled={!product.sizes.includes("m")}
          className={size === "m" ? "sizeSelected" : ""}
        >
          M
        </button>
        <button
          onClick={() => setSize("l")}
          disabled={!product.sizes.includes("l")}
          className={size === "l" ? "sizeSelected" : ""}
        >
          L
        </button>
        <button
          onClick={() => setSize("xl")}
          disabled={!product.sizes.includes("xl")}
          className={size === "xl" ? "sizeSelected" : ""}
        >
          XL
        </button>
        <button
          onClick={() => setSize("xxl")}
          disabled={!product.sizes.includes("xxl")}
          className={size === "xxl" ? "sizeSelected" : ""}
        >
          XXL
        </button>
      </div>
    </>
  );
};

const AboutProduct = () => {
  return (
    <>
      <p className="heading3">ABOUT THE PRODUCT</p>
      <div>
        <p className="text5 my-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>

        <p className="text5 my-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>

        <div>
          <div>
            <div className="mb-2">
              <p className="text6">Size & Fit</p>
              <p className="text7">Regular Fit</p>
              <p className="text7">
                The model (height 6') is wearing a size 40
              </p>
            </div>

            <div>
              <p className="text6"> Material & Care</p>
              <p className="text7"> Material: CottonMachine Wash</p>
            </div>
          </div>

          <div>
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
          </div>
        </div>
      </div>
    </>
  );
};

const UserSizes = ({ sizes, setCustomSize, customSize }) => {
  return (
    <div className="savedSizes">
      {sizes
        ? sizes.map((size, key) => (
            <div key={key}>
              <img
                onClick={() => setCustomSize(size._id)}
                src={Person1}
                alt="Person1"
                className={customSize === size._id ? "customSizeSelected" : ""}
              />
              <p className="text14">{size.name}</p>
            </div>
          ))
        : ""}

      <div>
        <p>+</p>
        <p className="text14">add new size</p>
      </div>
    </div>
  );
};

const ProductColor = ({ color, setColor }) => {
  return (
    <div className="selectColor">
      <button
        onClick={() => setColor("gray")}
        className={color === "gray" ? "colorSelected" : ""}
      ></button>
      <button
        onClick={() => setColor("black")}
        className={color === "black" ? "colorSelected" : ""}
      ></button>
      <button
        onClick={() => setColor("red")}
        className={color === "red" ? "colorSelected" : ""}
      ></button>
      <button
        onClick={() => setColor("orage")}
        className={color === "orage" ? "colorSelected" : ""}
      ></button>
      <button
        onClick={() => setColor("white")}
        className={color === "white" ? "colorSelected" : ""}
      ></button>
      <button
        onClick={() => setColor("blue")}
        className={color === "blue" ? "colorSelected" : ""}
      ></button>
    </div>
  );
};

const SimilarProduct = () => {
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
    <AliceCarousel
      mouseTracking
      items={womens}
      slideBy="page"
      autoWidth
      disableButtonsControls
      disableDotsControls
    />
  );
};
