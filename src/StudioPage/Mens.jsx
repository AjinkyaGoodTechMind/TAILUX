import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";
import "./Mens.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function Mens() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <div id="Mens-Page">
      <Navbar />
      <div id="Mens-Banner">
        <div className="IRRESISTIBLE-DEALS">IRRESISTIBLE DEALS</div>
        <div className="discount">
          <sub>*UPTO</sub> <span> 40% OFF</span>
        </div>
        <div className="clearance-sale">
          <span>CLEARANCE SALE</span>
          <div className="pipe"></div>
          <span>CLEARANCE SALE</span>
          <div className="pipe"></div>
          <span>CLEARANCE SALE</span>
        </div>
      </div>
      <div id="Content" style={{ width: "90vw" }}>
        <h3 className="Content-h1 Mens-h1">SHOP BY CATEGORY</h3>
        <div className="carousel-collar">
          <Slider {...settings}>
            <div className="cloth_item">
              <div className="cloth-img-holder t-shirt"></div>
              <span className="cloth-name">T-Shirts</span>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder jacket"></div>
              <span className="cloth-name">Jackets</span>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder jacket"></div>
              <span className="cloth-name">Jackets</span>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder jacket"></div>
              <span className="cloth-name">Jackets</span>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder jacket"></div>
              <span className="cloth-name">Jackets</span>
            </div>
          </Slider>
        </div>
      </div>
      <div id="Content" style={{ width: "90vw" }}>
        <div className="carousel-collar">
          <Slider {...settings}>
            <div className="cloth_item">
              <div className="cloth-img-holder t-shirt"></div>
              <span className="cloth-name">T-Shirts</span>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder jacket"></div>
              <span className="cloth-name">Jackets</span>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder jacket"></div>
              <span className="cloth-name">Jackets</span>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder jacket"></div>
              <span className="cloth-name">Jackets</span>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder jacket"></div>
              <span className="cloth-name">Jackets</span>
            </div>
          </Slider>
        </div>
      </div>

      {/* ----------------- */}
      <div id="Content" style={{ width: "90vw" }}>
        <h3 className="Content-h1 Mens-h1">SHOP BY OFFER</h3>

        <div className="carousel-collar Discount_30 ">
          <Slider {...settings}>
            <div className="cloth_item dip ">
              <div className="cloth-discount-holder gola">
                <span className="cloth-name discount-rate">
                  30%
                  <span id="sub_text">OFF</span>
                </span>
              </div>
            </div>
            <div className="cloth_item dip">
              <div className="cloth-discount-holder gola">
                <span className="cloth-name discount-rate ">
                  30%
                  <span id="sub_text">OFF</span>
                </span>
              </div>
            </div>
            <div className="cloth_item dip">
              <div className="cloth-discount-holder gola">
                <span className="cloth-name discount-rate">
                  30%
                  <span id="sub_text">OFF</span>
                </span>
              </div>
            </div>
            <div className="cloth_item dip">
              <div className="cloth-discount-holder gola">
                <span className="cloth-name discount-rate">
                  30%
                  <span id="sub_text">OFF</span>
                </span>
              </div>
            </div>
            <div className="cloth_item dip">
              <div className="cloth-discount-holder gola">
                <span className="cloth-name discount-rate">
                  30%
                  <span id="sub_text">OFF</span>
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* ----------------- */}
      <div id="try-Banner">
        <div className="tagpunch"></div>
        <div className="border"></div>
        <div className="companyBrand Customize">
          <p>Try TailuX Studio Now</p>
          <div className="strt_customizing">Start Customizing</div>
        </div>
      </div>

      {/* ----------------- */}
      <div id="Content_Range">
        <h3 className="Content-Ph3">PREMIUM RANGE OF FABRICS</h3>
        <div className="carousel-collar">
          <Slider
            {...{
              dots: false,
              infinite: false,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
            }}
          >
            <div>
              <div className="StudioPage-2-img-slide img-a">
                <div>
                  <h1>BROCADE SILK</h1>
                </div>
              </div>
            </div>
            <div>
              <div className="StudioPage-2-img-slide img-b">
                <div>
                  <h1>CHINNAMON CHIFFON</h1>
                </div>
              </div>
            </div>
            <div>
              <div className="StudioPage-2-img-slide img-c">
                <div>
                  <h1>CORDURY</h1>
                </div>
              </div>
            </div>
            <div>
              <img src="https://via.placeholder.com/500x250?text=Slide+4" alt="Slide 4" />
            </div>
          </Slider>
        </div>
      </div>
      {/* ----------------- */}
      <div id="Content_Range">
        <h3 className="Content-Ph3">YOUR RECENT VISITS</h3>
        <div className="carousel-collar">
          <Slider
            {...{
              dots: false,
              infinite: false,
              speed: 500,
              slidesToShow: 5,
              slidesToScroll: 1,
            }}
          >
            <div className="cloth_item">
              <div className="cloth-img-holder img-Ma"></div>
              <p id="price">
                Plunge Floral Print Georgette Dress<br></br>
                <b>₹1999</b> <del>₹1999</del>
              </p>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder img-Mb"></div>
              <p id="price">
                Landscape Print Belted Shirtdress<br></br>
                <b>₹1999</b> <del>₹1999</del>
              </p>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder img-Mc"></div>
              <p id="price">
                PLattice Floral Print Cotton Linen Dress<br></br>
                <b>₹1999</b> <del>₹1999</del>
              </p>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder img-Md"></div>
              <p id="price">
                Shadow Ombre Print Georgette Skirt<br></br>
                <b>₹1999</b> <del>₹1999</del>
              </p>
            </div>
            <div className="cloth_item">
              <div className="cloth-img-holder img-Me"></div>
              <p id="price">
                Cotton Sateen Empire Maxi Dress<br></br>
                <b>₹1999</b> <del>₹1999</del>
              </p>
            </div>
          </Slider>
        </div>
        <div className="product_preview">
          <h1 className="pp_h1">POPULAR SEARCHES</h1>
          <p className="PP_para1">
            Sherwani Track | Pants Blazers | Sweaters For Men | Men Wedding Dresses | Kurta | Pajama | Raincoats Shorts | Trousers | Waistcoat | Inner
            Wear | Nightwear | Jeans | Shirts | Jogger | Jeans | Men Suits T Shirts | Sweatshirts | Jackets For Men | Tracksuits | Ripped Jeans |
            Ethnic Wear | Hoodies
          </p>
          <br />
          <h1 className="pp_h1">ONLINE SHOPPING FOR MEN: OPTIONS UNLIMITED</h1>
          <p className="PP_para2">
            At Myntra, our online shopping fashion for men collection features plenty of options to create multiple outfits. At our men’s online shop
            we have brought together an exhaustive range of products from the best men’s brands. Here is a list of must-haves from the wide variety of
            awesome products at Myntra:
          </p>
          <ul className="PP_UL">
            <li>
              Opt for a charming yet laid-back look with cool T-shirts and casual shirts worn with stylish jeans, casual trousers or shorts. Stay
              sharp and sophisticated with our smart options in formal shirts and trousers. Look dapper when meeting your clients in our smooth suits.
              Put on trendy blazers for formal occasions. On your online men’s clothes’ shopping journey, make sure you include kurtas, jackets and
              sherwanis from our festive wear collection. Stay warm and comfortable in sweaters and sweatshirts. Get fit and ready for adventure, with
              our sports and active wear collection.
            </li>
            <li>
              Once you are done with your online men’s clothes’ shopping, make sure you pick up the right accessories to complement your look. Whether
              you are travelling to work or outside the city our wide variety of bags, backpacks and luggage collection will ensure you are
              well-packed. Our beautiful watches and smart watches work well to enhance your overall style quotient. Reach out for our sunglasses
              during the summers – let your eyes stay protected while you opt for maximum swag.
            </li>
            <li>
              Bring impeccable style to your shoe closet with our incredible collection of footwear for men. Look classy during formal and semi-formal
              occasions with derbies, loafers and oxfords. Stay hip and happening in parties with boat shoes, monks and brogues from our casual men’s
              footwear range. Lead an active lifestyle with sneakers and running shoes from our sports footwear selection. Pick up sandals, floaters
              and flip-flops for a trip to the beach. We also host socks in our men’s online shopping collection. That’s basically everything under
              one roof!
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
