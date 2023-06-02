import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import PriceDetails from "./PriceDetails";
import HeadPhone from "../layout/HeadPhone";

import PhonePay from "../../assets/images/PhonePay.svg";
import Paytm from "../../assets/images/Paytm.svg";
import GooglePay from "../../assets/images/GooglePay.svg";
import Card1 from "../../assets/images/Card1.png";

import { createOrder, userOrders } from "../../actions/orderActions";
import { removeCart, userCarts } from "../../actions/cartActions";
import { NEW_ORDER_SUCCESS } from "../../constants/orderConstants";
import { REMOVE_CART_RESET } from "../../constants/cartConstants";
import "./Payment.css";

const Payment = () => {

  const dispatch = useDispatch();

  const { orderCreated } = useSelector((state) => state.order);
  const { cartItems } = useSelector((state) => state.carts);
  const { cartRemoved } = useSelector((state) => state.cart);
  const { order } = useSelector((state) => state.collectOrderData);

  useEffect(() => {
    dispatch(userOrders());
    dispatch(userCarts());
  }, []);

  useEffect(() => {
    if (orderCreated) {
      alert("Order Success!");

      cartItems.forEach((cartItem) => {
        dispatch(removeCart(cartItem._id));
      });

      dispatch({ type: NEW_ORDER_SUCCESS });
    }
    if (cartRemoved) {
      dispatch({ type: REMOVE_CART_RESET });
    }
  }, [orderCreated, cartRemoved]);

  const price = cartItems.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.quantity * cartItem.product.price;
  }, 0);

  const discount = cartItems.reduce((accumulator, cartItem) => {
    return (
      accumulator +
      ((cartItem.product.price * cartItem.product.discount) / 100) *
        cartItem.quantity
    );
  }, 0);

  const deliveryCharges = 99;

  const totalAmount = price - discount + deliveryCharges;

  // Payment Submit
  const paymentFun = () => {
    dispatch(
      createOrder({
        ...order,
        paidAt: "23 May 2023",
        shippingPrice: deliveryCharges,
        totalPrice: totalAmount,
        deliveredAt: "23 May 2023",
        paymentInfo: { id: "paymentId" },
      })
    );
  };

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
              <label>
                <input type="radio" name="paymentOption" />
                <span class="custom-radio"></span>
                <div>
                  <img src={PhonePay} alt="PhonePay" />
                  <p>Google Pay UPI ID</p>
                  <p>6304897782@ok</p>
                </div>
              </label>
              <label>
                <input type="radio" name="paymentOption" />
                <span class="custom-radio"></span>

                <div>
                  <img src={GooglePay} alt="GooglePay" />
                  <p>Phonepe UPI ID</p>
                  <p>6304897782@ybl</p>
                </div>
              </label>
              <label>
                <input type="radio" name="paymentOption" />
                <span class="custom-radio"></span>

                <div>
                  <img src={Paytm} alt="Paytm" />
                  <p>Paytm UPI ID</p>
                  <p>6304897782@paytm</p>
                </div>
              </label>
            </div>
          </div>

          <div className="savedCards">
            <p className="text15">Saved Cards</p>
            <div>
              <label>
                <input type="radio" name="paymentOption" />
                <span class="custom-radio"></span>

                <img src={Card1} alt="Card1" />
              </label>
              <label>
                <input type="radio" name="paymentOption" />
                <span class="custom-radio"></span>

                <img src={Card1} alt="Card1" />
              </label>
            </div>
          </div>

          <div className="otherPaymentOptions">
            <p className="text15">Other Payment Options</p>

            <label>
              <input type="radio" name="paymentOption" />
              <span class="custom-radio"></span>

              <p>Pay With UPI</p>
            </label>

            <label>
              <input type="radio" name="paymentOption" />
              <span class="custom-radio"></span>

              <p>Pay With Wallet</p>
            </label>

            <label>
              <input type="radio" name="paymentOption" />
              <span class="custom-radio"></span>

              <p>Credit/Debit/ATM card</p>
            </label>

            <label>
              <input type="radio" name="paymentOption" />
              <span class="custom-radio"></span>
              <p>Cash On Delivery</p>
            </label>
          </div>
        </div>

        <div className="priceDetails">
          <PriceDetails />
          <button onClick={paymentFun} className="placeOrderBtn text15">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Payment;
