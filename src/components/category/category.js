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

import Women1 from "../../assets/images/Women1.png";
import Women2 from "../../assets/images/Women2.png";
import Women3 from "../../assets/images/Women3.png";
import Women4 from "../../assets/images/Women4.png";

import Fabric1 from "../../assets/images/Fabric1.png";
import Fabric2 from "../../assets/images/Fabric2.png";
import Fabric3 from "../../assets/images/Fabric3.png";

import { Carousel } from "react-responsive-carousel";
import AliceCarousel from "react-alice-carousel";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import "../home/Home.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../actions/productActions";
import { categoryCarousel } from "../../actions/page/carouselActions";
import { categoryDeal } from "../../actions/page/dealActions";
import { categoryTrending } from "../../actions/page/trendingActions";

const Category = () => {
  const { loading, products } = useSelector((state) => state.products);
  const { carousel } = useSelector((state) => state.carousel)
  const { deal } = useSelector((state) => state.deal)
  const { trending } = useSelector((state) => state.trending)
  const dispatch = useDispatch();

  const { categoryName } = useParams()

  useEffect(() => {
    dispatch(categoryCarousel(categoryName))
    dispatch(categoryDeal(categoryName))
    dispatch(categoryTrending(categoryName))
  }, [categoryName]);

  useEffect(() => {
    dispatch(allProducts());
  }, []);

  const deals =
    deal ? deal.dealImages.map((dealImage, key) =>
      <div key={key} className="dealBox">
        <img src={`http://localhost:5000/dealImages/${dealImage}`} alt={dealImage} />
      </div>) : []

  const womens = products.map((product, key) =>
    <div key={key} className="womenBox">
      <Link to={`/product/${product._id}`}>
        <img
          src={`http://localhost:5000/productImages/${product.images[0]}`}
          alt={product.images[0]}
        />
      </Link>
      <div>
        <p className="text4">{product.name}</p>
        {/* <p className="text4">Georgette Dress</p> */}
        <p className="text4">
          <span>₹{product.price - product.price * product.discount / 100}</span> <span>₹{product.price}</span>
        </p>
      </div>
    </div>)

  const fabrics = [
    <div className="fabricBox">
      <img src={Fabric1} alt="Fabric1" />
      <p>BROCADE SILK</p>
    </div>,
    <div className="fabricBox">
      <img src={Fabric2} alt="Fabric2" />
      <p>CHINNAMON CHIFFON</p>
    </div>,
    <div className="fabricBox">
      <img src={Fabric1} alt="Fabric1" />
      <p>BROCADE SILK</p>
    </div>,
    <div className="fabricBox">
      <img src={Fabric2} alt="Fabric2" />
      <p>CHINNAMON CHIFFON</p>
    </div>,
    <div className="fabricBox">
      <img src={Fabric1} alt="Fabric1" />
      <p>BROCADE SILK</p>
    </div>,
    <div className="fabricBox">
      <img src={Fabric2} alt="Fabric2" />
      <p>CHINNAMON CHIFFON</p>
    </div>,
    <div className="fabricBox">
      <img src={Fabric1} alt="Fabric1" />
      <p>BROCADE SILK</p>
    </div>,
    <div className="fabricBox">
      <img src={Fabric2} alt="Fabric2" />
      <p>CHINNAMON CHIFFON</p>
    </div>,
    <div className="fabricBox">
      <img src={Fabric1} alt="Fabric1" />
      <p>BROCADE SILK</p>
    </div>,
    <div className="fabricBox">
      <img src={Fabric2} alt="Fabric2" />
      <p>CHINNAMON CHIFFON</p>
    </div>,
  ];

  return (
    <Fragment>
      <Navbar />

      {/* Women Carousel */}
      <div className="carousel">
        <Carousel
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          autoPlay
          infiniteLoop
        >
          {carousel ? carousel.carouselImages.map((carouselImage, key) =>
            <div key={key}>
              <img src={`http://localhost:5000/carouselImages/${carouselImage}`} alt="CarouselImage1" />
            </div>
          ) : ""}
          {/* <div>
            <img src={carousel ? `http://localhost:5000/carouselImages/${carousel.carouselImages[0]}` : ""} alt="CarouselImage2" />
          </div>
          <div>
            <img src={carousel ? `http://localhost:5000/carouselImages/${carousel.carouselImages[0]}` : ""} alt="CarouselImage3" />
          </div> */}
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
        <div className="seasonalWear px-4">
          <p className="heading1">SEASONAL DESIGNER WEAR</p>
          <ResponsiveMasonry
            columnsCount={2}
            columnsCountBreakPoints={{ 350: 3, 750: 2, 900: 2 }}
          >
            <Masonry gutter="40px">
              <div className="seasonalBox">
                <img src={trending ? `http://localhost:5000/trendingImages/${trending.trendingImages[0]}` : ""} alt="Rectangle14" />
                <div>
                  <p>
                    DESIGNER <br /> WEAR
                  </p>
                  <p>by G.Hasini</p>
                </div>
              </div>
              <div>
                <div className="seasonalBox mb-4">
                  <img src={trending ? `http://localhost:5000/trendingImages/${trending.trendingImages[1]}` : ""} alt="Rectangle15" />
                  <div>
                    <p>
                      PRINTED <br /> TREND
                    </p>
                    <p>by K.A.Paul</p>
                  </div>
                </div>
                <div className="seasonalBox">
                  <img src={trending ? `http://localhost:5000/trendingImages/${trending.trendingImages[2]}` : ""} alt="Rectangle16" />
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

        {/* Fabric Sliider */}
        <div>
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

export default Category;
