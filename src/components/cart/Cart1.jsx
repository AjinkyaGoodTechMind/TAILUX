import React, { Fragment } from "react";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";

import CartItem1 from "../../assets/images/CartItem1.png";
import Women2 from "../../assets/images/Women2.png";
import "./Cart1.css";
import HeadPhone from "../layout/HeadPhone";

const Cart1 = () => {
  return (
    <Fragment>
      <Navbar />
      <HeadPhone />

      <div className="cart1Container">
        <div className="deliveryDetails">
          <div>
            <p className="text15">Deliver to Guntur-522007</p>
            <button className="text15">Change</button>
          </div>

          <div className="outOfStockBox">
            <img src={CartItem1} alt="CartItem1" />
            <div>
              <p className="text16">Party Wear Dress for Women</p>
              <p>Pack of 1</p>
              <p>Out of Stock</p>
              <div>
                <button>Add to Wishlist</button>
                <button>Remove</button>
              </div>
            </div>
          </div>

          <div className="deliveryBox">
            <img src={CartItem1} alt="CartItem1" />
            <div>
              <p className="text16">Party Wear Dress for Women</p>
              <p>Pack of 1</p>
              <p>₹2999</p>
              <div>
                <button>Add to Wishlist</button>
                <button>Remove</button>
              </div>
            </div>

            <div>
              <p>Delivery Expected by</p>
              <p>30th March, 2023</p>
            </div>
          </div>

          <div className="deliveryBox">
            <img src={Women2} alt="Women2" />
            <div>
              <p className="text16">Party Wear Dress for Women</p>
              <p>Pack of 1</p>
              <p>₹999</p>
              <div>
                <button>Add to Wishlist</button>
                <button>Remove</button>
              </div>
            </div>

            <div>
              <p>Delivery Expected by</p>
              <p>30th March, 2023</p>
            </div>
          </div>
        </div>

        <div className="priceDetails">
          <p className="text15 pb-4">PRICE DETAILS</p>
          <div className="allCenter py-1">
            <p className="text16">Price (2)</p>
            <p className="text16">₹3999</p>
          </div>
          <div className="allCenter py-1">
            <p className="text16">Discount</p>
            <p className="text16">₹999</p>
          </div>
          <div className="allCenter py-1">
            <p className="text16">Delivery Charges</p>
            <p className="text16">₹99</p>
          </div>
          <div className="allCenter pt-4 pb-2">
            <p className="text15">Total Amount</p>
            <p className="text15">₹4098</p>
          </div>
          <p className="text16 py-1" style={{ color: "#00AD3B" }}>
            You’ll save 999 on this order
          </p>
          <button className="placeOrderBtn text15">PLACE ORDER</button>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Cart1;
