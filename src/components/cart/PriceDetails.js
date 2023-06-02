import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { userCarts } from "../../actions/cartActions";

const PriceDetails = () => {

    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.carts);

    useEffect(() => {
        dispatch(userCarts());
    }, []);

    // Total price of cart produts
    const price = cartItems.reduce((accumulator, cartItem) => {
        return accumulator + cartItem.quantity * cartItem.product.price;
    }, 0);

    // Total Quantity of products
    const itemsCount = cartItems.reduce((accumulator, cartItem) => {
        return accumulator + cartItem.quantity;
    }, 0);

    // Total discount on Products
    const discount = cartItems.reduce((accumulator, cartItem) => {
        return (
            accumulator +
            ((cartItem.product.price * cartItem.product.discount) / 100) *
            cartItem.quantity
        );
    }, 0);

    const deliveryCharges = 99;

    // Total amount after minus discount and add deliveryCharges
    const totalAmount = price - discount + deliveryCharges;

    return (
        <>
            <p className="text15 pb-4">PRICE DETAILS</p>
            <div className="allCenter py-1">
                <p className="text16">Price ({itemsCount})</p>
                <p className="text16">₹{price}</p>
            </div>
            <div className="allCenter py-1">
                <p className="text16">Discount</p>
                <p className="text16">₹{Math.floor(discount)}</p>
            </div>
            <div className="allCenter py-1">
                <p className="text16">Delivery Charges</p>
                <p className="text16">₹{deliveryCharges}</p>
            </div>
            <div className="allCenter pt-4 pb-2">
                <p className="text15">Total Amount</p>
                <p className="text15">₹{Math.floor(totalAmount)}</p>
            </div>
            <p className="text16 py-1" style={{ color: "#00AD3B" }}>
                You’ll save {Math.floor(discount)} on this order
            </p>
        </>
    )
}

export default PriceDetails