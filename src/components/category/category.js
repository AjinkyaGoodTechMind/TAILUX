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
import "./category.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../actions/productActions";
import { categoryCarousel } from "../../actions/page/carouselActions";
import { categoryDeal } from "../../actions/page/dealActions";
import { categoryTrending } from "../../actions/page/trendingActions";

const Category = () => {
  const { loading, products } = useSelector((state) => state.products);
  const { carousel } = useSelector((state) => state.carousel);
  const { deal } = useSelector((state) => state.deal);
  const { trending } = useSelector((state) => state.trending);
  const dispatch = useDispatch();

  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(categoryCarousel(categoryName));
    dispatch(categoryDeal(categoryName));
    dispatch(categoryTrending(categoryName));
  }, [categoryName]);

  useEffect(() => {
    dispatch(allProducts());
  }, []);

  const deals = deal
    ? deal.dealImages.map((dealImage, key) => (
        <div key={key} className="dealBox">
          <img
            src={`http://localhost:5000/dealImages/${dealImage}`}
            alt={dealImage}
          />
        </div>
      ))
    : [];

  const womens = products.map((product, key) => (
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
          <span>
            ₹{product.price - (product.price * product.discount) / 100}
          </span>{" "}
          <span>₹{product.price}</span>
        </p>
      </div>
    </div>
  ));

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
          {carousel
            ? carousel.carouselImages.map((carouselImage, key) => (
                <div key={key}>
                  <img
                    src={`http://localhost:5000/carouselImages/${carouselImage}`}
                    alt="CarouselImage1"
                  />
                </div>
              ))
            : ""}
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
                <img
                  src={
                    trending
                      ? `http://localhost:5000/trendingImages/${trending.trendingImages[0]}`
                      : ""
                  }
                  alt="Rectangle14"
                />
                <div>
                  <p>
                    DESIGNER <br /> WEAR
                  </p>
                  <p>by G.Hasini</p>
                </div>
              </div>
              <div>
                <div className="seasonalBox mb-4">
                  <img
                    src={
                      trending
                        ? `http://localhost:5000/trendingImages/${trending.trendingImages[1]}`
                        : ""
                    }
                    alt="Rectangle15"
                  />
                  <div>
                    <p>
                      PRINTED <br /> TREND
                    </p>
                    <p>by K.A.Paul</p>
                  </div>
                </div>
                <div className="seasonalBox">
                  <img
                    src={
                      trending
                        ? `http://localhost:5000/trendingImages/${trending.trendingImages[2]}`
                        : ""
                    }
                    alt="Rectangle16"
                  />
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
          <p className="heading1">SHOP BY CATEGORY</p>
          <div className="shopByCategory">
            <div className="tShirt">
              <p>T-Shirts</p>
            </div>
            <div className="jacket">
              <p>Jackets</p>
            </div>
            <div className="jacket">
              <p>Jackets</p>
            </div>
            <div className="jacket">
              <p>Jackets</p>
            </div>
            <div className="jacket">
              <p>Jackets</p>
            </div>

            <div className="tShirt">
              <p>T-Shirts</p>
            </div>
            <div className="jacket">
              <p>Jackets</p>
            </div>
            <div className="jacket">
              <p>Jackets</p>
            </div>
            <div className="jacket">
              <p>Jackets</p>
            </div>
            <div className="jacket">
              <p>Jackets</p>
            </div>
          </div>
        </div>

        {/* shop by offer */}
        <div>
          <p className="heading1">SHOP BY OFFER</p>
          <div className="shopByOffer">
            <div>
              <p>30%</p>
              <p>OFF</p>
            </div>
            <div>
              <p>30%</p>
              <p>OFF</p>
            </div>
            <div>
              <p>30%</p>
              <p>OFF</p>
            </div>
            <div>
              <p>30%</p>
              <p>OFF</p>
            </div>
            <div>
              <p>30%</p>
              <p>OFF</p>
            </div>
          </div>
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

        <div>
          <div className="popularSearches">
            <p>POPULAR SEARCHES</p>
            <p>
              Sherwani Track &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;
              Pants Blazers &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;
              Sweaters For Men &nbsp;&nbsp;&nbsp;&nbsp; |
              &nbsp;&nbsp;&nbsp;&nbsp; Men Wedding Dresses
              &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; Kurta
              &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; Pajama |
              &nbsp;&nbsp;&nbsp;&nbsp; Raincoats Shorts &nbsp;&nbsp;&nbsp;&nbsp;
              | &nbsp;&nbsp;&nbsp;&nbsp; Trousers &nbsp;&nbsp;&nbsp;&nbsp; |
              &nbsp;&nbsp;&nbsp;&nbsp; Waistcoat &nbsp;&nbsp;&nbsp;&nbsp; |
              &nbsp;&nbsp;&nbsp;&nbsp; Inner Wear &nbsp;&nbsp;&nbsp;&nbsp; |
              &nbsp;&nbsp;&nbsp;&nbsp; Nightwear &nbsp;&nbsp;&nbsp;&nbsp; |
              &nbsp;&nbsp;&nbsp;&nbsp; Jeans &nbsp;&nbsp;&nbsp;&nbsp; |
              &nbsp;&nbsp;&nbsp;&nbsp; Shirts &nbsp;&nbsp;&nbsp;&nbsp; |
              &nbsp;&nbsp;&nbsp;&nbsp; Jogger &nbsp;&nbsp;&nbsp;&nbsp; |
              &nbsp;&nbsp;&nbsp;&nbsp; Jeans &nbsp;&nbsp;&nbsp;&nbsp; |
              &nbsp;&nbsp;&nbsp;&nbsp; Men Suits T Shirts
              &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; Sweatshirts |
              &nbsp;&nbsp;&nbsp;&nbsp; Jackets For Men &nbsp;&nbsp;&nbsp;&nbsp;
              | &nbsp;&nbsp;&nbsp;&nbsp; Tracksuits &nbsp;&nbsp;&nbsp;&nbsp; |
              &nbsp;&nbsp;&nbsp;&nbsp; Ripped Jeans &nbsp;&nbsp;&nbsp;&nbsp; |
              &nbsp;&nbsp;&nbsp;&nbsp; Ethnic Wear &nbsp;&nbsp;&nbsp;&nbsp; |
              &nbsp;&nbsp;&nbsp;&nbsp; Hoodies
            </p>
          </div>

          <div className="onlineShopping">
            <p>ONLINE SHOPPING FOR MEN: OPTIONS UNLIMITED</p>
            <p>
              At Myntra, our online shopping fashion for men collection features
              plenty of options to create multiple outfits. At our men’s online
              shop we have brought together an exhaustive range of products from
              the best men’s brands. Here is a list of must-haves from the wide
              variety of awesome products at Myntra:
              <ul>
                <li>
                  Opt for a charming yet laid-back look with cool T-shirts and
                  casual shirts worn with stylish jeans, casual trousers or
                  shorts. Stay sharp and sophisticated with our smart options in
                  formal shirts and trousers. Look dapper when meeting your
                  clients in our smooth suits. Put on trendy blazers for formal
                  occasions. On your online men’s clothes’ shopping journey,
                  make sure you include kurtas, jackets and sherwanis from our
                  festive wear collection. Stay warm and comfortable in sweaters
                  and sweatshirts. Get fit and ready for adventure, with our
                  sports and active wear collection.
                </li>
                <li>
                  Once you are done with your online men’s clothes’ shopping,
                  make sure you pick up the right accessories to complement your
                  look. Whether you are travelling to work or outside the city
                  our wide variety of bags, backpacks and luggage collection
                  will ensure you are well-packed. Our beautiful watches and
                  smart watches work well to enhance your overall style
                  quotient. Reach out for our sunglasses during the summers –
                  let your eyes stay protected while you opt for maximum swag.
                </li>
                <li>
                  Bring impeccable style to your shoe closet with our incredible
                  collection of footwear for men. Look classy during formal and
                  semi-formal occasions with derbies, loafers and oxfords. Stay
                  hip and happening in parties with boat shoes, monks and
                  brogues from our casual men’s footwear range. Lead an active
                  lifestyle with sneakers and running shoes from our sports
                  footwear selection. Pick up sandals, floaters and flip-flops
                  for a trip to the beach. We also host socks in our men’s
                  online shopping collection. That’s basically everything under
                  one roof!
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Category;
