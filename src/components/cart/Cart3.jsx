import React, { Fragment, useEffect } from "react";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import HeadPhone from "../layout/HeadPhone";
import "./Cart3.css";

import PhonePay from "../../assets/images/PhonePay.svg";
import Paytm from "../../assets/images/Paytm.svg";
import GooglePay from "../../assets/images/GooglePay.svg";
import Card1 from "../../assets/images/Card1.png";
import PriceDetails from "./PriceDetails";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder, userOrders } from "../../actions/orderActions";
import { removeCart, userCarts } from "../../actions/cartActions";
import { UPDATE_ORDER_RESET } from "../../constants/orderConstants";
import { REMOVE_CART_RESET } from "../../constants/cartConstants";

const Cart3 = () => {
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.orders);
  const { orderUpdated } = useSelector((state) => state.order);
  const { cartItems } = useSelector((state) => state.carts);
  const { cartRemoved } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(userOrders());
    dispatch(userCarts());
  }, []);

  useEffect(() => {
    if (orderUpdated) {
      alert("Order Success!");

      cartItems.forEach((cartItem) => {
        dispatch(removeCart(cartItem._id));
      });

      dispatch({ type: UPDATE_ORDER_RESET });
    }
    if (cartRemoved) {
      dispatch({ type: REMOVE_CART_RESET });
    }
  }, [orderUpdated, cartRemoved]);

  const paymentFun = () => {
    const id = orders[orders.length - 1]._id;

    dispatch(updateOrder(id, { paymentInfo: { id: "paymentId" } }));
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

export default Cart3;
