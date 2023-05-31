import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import "./Cart2.css";
import { Link, useNavigate } from "react-router-dom";
import HeadPhone from "../layout/HeadPhone";
import { userCarts } from "../../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { userAddresses } from "../../actions/addressActions";
import PriceDetails from "./PriceDetails";
import { collectOrderData, createOrder } from "../../actions/orderActions";

const Cart2 = () => {
  const [address, setAddress] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.carts);
  const { addresses } = useSelector((state) => state.addresses);
  // const { order } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(userCarts());
    dispatch(userAddresses());
  }, []);

  const addressSelectFun = () => {
    if (!address) return alert("Choose a address");

    dispatch(
      collectOrderData({
        shippingInfo: address,
      })
    );
    navigate("/cart3");
  };

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

          {addresses &&
            addresses.map((address, key) => (
              <div key={key} className="addressBox">
                <div>
                  <div>
                    {/* <div className="myRadio">
                  <p></p>
                </div> */}
                    <input
                      onChange={(e) => setAddress(e.target.value)}
                      type="radio"
                      value={address._id}
                      name="address"
                    />
                  </div>
                  <div>
                    <p>{address.primaryLocation}</p>
                    <div>
                      <p className="py-2">
                        <span className="text15 name">{address.name}</span>
                        <span className="text15 mobileNumber">
                          {address.mobileNo}
                        </span>
                      </p>
                      <p className="fullAddress">
                        {address.street}, {address.locality}, {address.city},{" "}
                        {address.state} - {address.pincode}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {/* <div className="addressBox">
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
          </div> */}
        </div>

        <div className="priceDetails">
          <PriceDetails />
          <button onClick={addressSelectFun} className="placeOrderBtn text15">
            DELIVERE HERE
          </button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Cart2;
