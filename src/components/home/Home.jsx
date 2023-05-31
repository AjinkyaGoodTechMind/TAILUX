import React, { Fragment, useEffect } from "react";

import CarouselImage1 from "../../assets/images/CarouselImage1.png";
import CarouselImage2 from "../../assets/images/CarouselImage2.png";
import CarouselImage3 from "../../assets/images/CarouselImage3.png";

import fotor1 from "../../assets/images/fotor1.png";
import fotor2 from "../../assets/images/fotor2.png";
import fotor3 from "../../assets/images/fotor3.png";
import fotor4 from "../../assets/images/fotor4.png";

import Rectangle14 from "../../assets/images/Rectangle 14.png";
import Rectangle15 from "../../assets/images/Rectangle 15.png";
import Rectangle16 from "../../assets/images/Rectangle 16.png";

import { Carousel } from "react-responsive-carousel";
import AliceCarousel from "react-alice-carousel";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import "./Home.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../actions/productActions";

const Home = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts());
  }, []);

  const deals = [
    <div className="dealBox">
      <img draggable={false} src={fotor1} alt="fotor1" />
    </div>,
    <div className="dealBox">
      <img draggable={false} src={fotor2} alt="fotor2" />
    </div>,
    <div className="dealBox">
      <img draggable={false} src={fotor3} alt="fotor3" />
    </div>,
    <div className="dealBox">
      <img draggable={false} src={fotor4} alt="fotor4" />
    </div>,
    <div className="dealBox">
      <img draggable={false} src={fotor1} alt="fotor1" />
    </div>,
    <div className="dealBox">
      <img draggable={false} src={fotor1} alt="fotor1" />
    </div>,
    <div className="dealBox">
      <img draggable={false} src={fotor1} alt="fotor1" />
    </div>,
    <div className="dealBox">
      <img draggable={false} src={fotor1} alt="fotor1" />
    </div>,
  ];

  const womens = products.map((product, key) => (
    <div key={key} className="womenBox">
      <Link to={`/product/${product._id}`}>
        <img
          draggable="false"
          src={`http://localhost:5000/productImages/${product.images[0]}`}
          alt={product.images[0]}
        />
      </Link>
      <div>
        <p className="text4">{product.name}</p>
        <p className="text4">
          <span>
            ₹
            {Math.floor(
              product.price - (product.price * product.discount) / 100
            )}
          </span>{" "}
          <span>₹{product.price}</span>
        </p>
      </div>
    </div>
  ));

  const fabrics = [
    <div className="fabricBox">
      <div>
        <p>BROCADE SILK</p>
      </div>
    </div>,
    <div className="fabricBox">
      <div>
        <p>CHINNAMON CHIFFON</p>
      </div>
    </div>,
    <div className="fabricBox">
      <div>
        <p>BROCADE SILK</p>
      </div>
    </div>,
    <div className="fabricBox">
      <div>
        <p>CHINNAMON CHIFFON</p>
      </div>
    </div>,
    <div className="fabricBox">
      <div>
        <p>BROCADE SILK</p>
      </div>
    </div>,
    <div className="fabricBox">
      <div>
        <p>CHINNAMON CHIFFON</p>
      </div>
    </div>,
    <div className="fabricBox">
      <div>
        <p>BROCADE SILK</p>
      </div>
    </div>,
    <div className="fabricBox">
      <div>
        <p>CHINNAMON CHIFFON</p>
      </div>
    </div>,
    <div className="fabricBox">
      <div>
        <p>BROCADE SILK</p>
      </div>
    </div>,
    <div className="fabricBox">
      <div>
        <p>CHINNAMON CHIFFON</p>
      </div>
    </div>,
  ];

  return (
    <Fragment>
      <Navbar />

      {/* Home Carousel */}
      <div className="carousel">
        <Carousel
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          autoPlay
          infiniteLoop
        >
          <div>
            <img src={CarouselImage1} alt="CarouselImage1" />
          </div>
          <div>
            <img src={CarouselImage2} alt="CarouselImage2" />
          </div>
          <div>
            <img src={CarouselImage3} alt="CarouselImage3" />
          </div>
        </Carousel>
      </div>

      <div className="homeMiddleContainer">
        {/* Deals of The day Slider */}
        <div>
          <p className="heading1">DEALS OF THE DAY</p>
          <AliceCarousel
            mouseTracking
            items={deals}
            slideBy="page"
            autoWidth
            disableButtonsControls
            disableDotsControls
          />
        </div>

        {/* Masonry */}
        <div className="seasonalWear" style={{ marginRight: "20px" }}>
          <p className="heading1">SEASONAL DESIGNER WEAR</p>
          <ResponsiveMasonry
            columnsCount={2}
            columnsCountBreakPoints={{ 350: 3, 750: 2, 900: 2 }}
          >
            <Masonry gutter="40px">
              <div className="seasonalBox">
                <img src={Rectangle14} alt="Rectangle14" />
                <div>
                  <p>
                    DESIGNER <br /> WEAR
                  </p>
                  <p>by G.Hasini</p>
                </div>
              </div>
              <div>
                <div className="seasonalBox mb-4">
                  <img src={Rectangle15} alt="Rectangle15" />
                  <div>
                    <p>
                      PRINTED <br /> TREND
                    </p>
                    <p>by K.A.Paul</p>
                  </div>
                </div>
                <div className="seasonalBox">
                  <img src={Rectangle16} alt="Rectangle16" />
                  <div>
                    <p>
                      PANTS <br /> WITH <br /> PATTERNS
                    </p>
                    <p>by John</p>
                  </div>
                </div>
              </div>
            </Masonry>
          </ResponsiveMasonry>
        </div>

        {/* Women Slider */}
        <div>
          <p className="heading1">NEW ARRIVALS- WOMEN</p>
          <AliceCarousel
            mouseTracking
            items={womens}
            slideBy="page"
            autoWidth
            disableButtonsControls
            disableDotsControls
          />
        </div>

        {/* Men Slider */}
        <div>
          <p className="heading1">NEW ARRIVALS- MEN</p>
          <AliceCarousel
            mouseTracking
            items={womens}
            slideBy="page"
            autoWidth
            disableButtonsControls
            disableDotsControls
          />
        </div>

        {/* Fabric Sliider */}
        <div className="fabricCarousel">
          <p className="heading1">PREMIUM RANGE OF FABRICS</p>
          <AliceCarousel
            mouseTracking
            items={fabrics}
            slideBy="page"
            autoWidth
            disableButtonsControls
            disableDotsControls
          />
        </div>

        {/* Recent Visit Slider */}
        <div>
          <p className="heading1">YOUR RECENT VISITS</p>
          <AliceCarousel
            mouseTracking
            items={womens}
            slideBy="page"
            autoWidth
            disableButtonsControls
            disableDotsControls
          />
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Home;
