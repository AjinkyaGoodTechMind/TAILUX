import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import HeadPhone from "../layout/HeadPhone";
import PriceDetails from "./PriceDetails";

import { removeCart, userCarts } from "../../actions/cartActions";
import { REMOVE_CART_RESET } from "../../constants/cartConstants";
import { collectOrderData } from "../../actions/orderActions";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.carts);
  const { cartRemoved } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(userCarts());
    if (cartRemoved) {
      alert("Product Removed From Cart List");
      dispatch({ type: REMOVE_CART_RESET });
    }
  }, [cartRemoved, dispatch]);

  const removeCartItem = (id) => {
    dispatch(removeCart(id));
  };

  const products = cartItems
    ? cartItems.map((cartItem) => ({
        product: cartItem.product._id,
        price: cartItem.product.price,
        quantity: cartItem.quantity,
        customSize: cartItem.customSize,
        color: cartItem.color,
        pattern: cartItem.pattern,
        fabric: cartItem.fabric,
        collarStyle: cartItem.collarStyle,
        buttonsStyle: cartItem.buttonsStyle,
        designName: cartItem.designName,
        customProduct: cartItem.customProduct,
      }))
    : {};

  // Process to complete order
  const collectDataFun = () => {
    dispatch(collectOrderData({ products }));
    navigate("/selectAddress");
  };

  return (
    <Fragment>
      <Navbar />
      <HeadPhone />

      {cartItems.length !== 0 ? (
        <div className="cart1Container">
          <div className="deliveryDetails">
            <div>
              <p className="text15">Deliver to Guntur-522007</p>
              <button className="text15">Change</button>
            </div>

            {cartItems.map((cartItem, key) => (
              <div key={key} className="deliveryBox">
                <img
                  src={`http://localhost:5000/productImages/${cartItem.product.images[0]}`}
                  alt="CartItem1"
                />
                <div>
                  <p className="text16">{cartItem.product.name}</p>
                  <p>Pack of {cartItem.quantity}</p>
                  <p>₹{cartItem.product.price}</p>
                  <div>
                    <button>Add to Wishlist</button>
                    <button onClick={() => removeCartItem(cartItem._id)}>
                      Remove
                    </button>
                  </div>
                </div>

                <div>
                  <p>Delivery Expected by</p>
                  <p>30th March, 2023</p>
                </div>
              </div>
            ))}
          </div>

          <div className="priceDetails">
            <PriceDetails />
            <button onClick={collectDataFun} className="placeOrderBtn text15">
              PLACE ORDER
            </button>
          </div>
        </div>
      ) : (
        <h1 className="justify-content-center vh-100 d-flex align-items-center">
          No Items in Bag
        </h1>
      )}
      <Footer />
    </Fragment>
  );
};

export default Cart;
