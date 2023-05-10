import React, { Fragment } from "react";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import HeadPhone from "../layout/HeadPhone";
import "./Cart3.css";

import PhonePay from "../../assets/images/PhonePay.svg";
import Paytm from "../../assets/images/Paytm.svg";
import GooglePay from "../../assets/images/GooglePay.svg";
import Card1 from "../../assets/images/Card1.png";

const Cart3 = () => {
  return (
    <Fragment>
      <Navbar />
      <HeadPhone />

      <div className="cart3Container">
        <div className="paymentContainer">
          <p className="text15">PAYMENT OPTIONS</p>

          <div className="savedUpi">
            <p className="text15">Saved UPIs</p>

            <div>
              <div>
                <div className="myRadio myRadioOff">
                  <p></p>
                </div>

                <div>
                  <img src={PhonePay} alt="PhonePay" />
                  <p>Google Pay UPI ID</p>
                  <p>6304897782@ok</p>
                </div>
              </div>
              <div>
                <div className="myRadio myRadioOff">
                  <p></p>
                </div>

                <div>
                  <img src={GooglePay} alt="GooglePay" />
                  <p>Phonepe UPI ID</p>
                  <p>6304897782@ybl</p>
                </div>
              </div>
              <div>
                <div className="myRadio myRadioOff">
                  <p></p>
                </div>

                <div>
                  <img src={Paytm} alt="Paytm" />
                  <p>Paytm UPI ID</p>
                  <p>6304897782@paytm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="savedCards">
            <p className="text15">Saved Cards</p>
            <div>
              <div>
                <div className="myRadio myRadioOff">
                  <p></p>
                </div>
                <img src={Card1} alt="Card1" />
              </div>
              <div>
                <div className="myRadio myRadioOff">
                  <p></p>
                </div>
                <img src={Card1} alt="Card1" />
              </div>
            </div>
          </div>

          <div className="otherPaymentOptions">
            <p className="text15">Other Payment Options</p>

            <div>
              <div className="myRadio myRadioOff">
                <p></p>
              </div>
              <p>Pay With UPI</p>
            </div>

            <div>
              <div className="myRadio myRadioOff">
                <p></p>
              </div>
              <p>Pay With Wallet</p>
            </div>

            <div>
              <div className="myRadio myRadioOff">
                <p></p>
              </div>
              <p>Credit/Debit/ATM card</p>
            </div>

            <div>
              <div className="myRadio myRadioOff">
                <p></p>
              </div>
              <p>Cash On Delivery</p>
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
          <button className="placeOrderBtn text15">PROCEED TO PAYMENT</button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Cart3;
