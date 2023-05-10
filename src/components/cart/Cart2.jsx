import React, { Fragment } from "react";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import "./Cart2.css";
import { Link } from "react-router-dom";
import HeadPhone from "../layout/HeadPhone";

const Cart2 = () => {
  return (
    <Fragment>
      <Navbar />
      <HeadPhone />

      <div className="cart2Container">
        <div className="addressContainer">
          <div>
            <p className="text15">CONFIRM ADDRESS</p>
            <Link to="/">Add New Address</Link>
          </div>

          <div className="addressBox">
            <div>
              <div>
                <div className="myRadio">
                  <p></p>
                </div>
              </div>
              <div>
                <p>HOME</p>
                <div>
                  <p className="py-2">
                    <span className="text15 name">M S Nageswara Rao</span>
                    <span className="text15 mobileNumber">6304897782</span>
                  </p>
                  <p className="fullAddress">
                    Plot no: 548 D.o : 4-8-98, Karanamgari veedhi, koretipadu,
                    Guntur, Guntur, Andhra Pradesh - 522007
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="addressBox">
            <div>
              <div>
                <div className="">
                  <p></p>
                </div>
              </div>
              <div>
                <p>HOME</p>
                <div>
                  <p className="py-2">
                    <span className="text15 name">M S Nageswara Rao</span>
                    <span className="text15 mobileNumber">6304897782</span>
                  </p>
                  <p className="fullAddress">
                    Plot no: 548 D.o : 4-8-98, Karanamgari veedhi, koretipadu,
                    Guntur, Guntur, Andhra Pradesh - 522007
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="addressBox">
            <div>
              <div>
                <div className="myRadio myRadioOff">
                  <p></p>
                </div>
              </div>
              <div>
                <p>HOME</p>
                <div>
                  <p className="py-2">
                    <span className="text15 name">M S Nageswara Rao</span>
                    <span className="text15 mobileNumber">6304897782</span>
                  </p>
                  <p className="fullAddress">
                    Plot no: 548 D.o : 4-8-98, Karanamgari veedhi, koretipadu,
                    Guntur, Guntur, Andhra Pradesh - 522007
                  </p>
                </div>
              </div>
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
          <button className="placeOrderBtn text15">DELIVERE HERE</button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Cart2;
