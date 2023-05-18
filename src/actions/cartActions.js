import { ADD_TO_CART_FAIL, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, REMOVE_CART_FAIL, REMOVE_CART_REQUEST, REMOVE_CART_SUCCESS, USER_CARTS_FAIL, USER_CARTS_REQUEST, USER_CARTS_SUCCESS } from "../constants/cartConstants"
import axios from 'axios'

// 1. Add To Cart
export const addToCart = (details) => async (dispatch) => {
    try {
        dispatch({ type: ADD_TO_CART_REQUEST })

        const { data } = await axios.post("http://localhost:5000/api/cart/new", details)
        console.log(data)
        dispatch({ type: ADD_TO_CART_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: ADD_TO_CART_FAIL,
            error: error.response.data.message
        })
    }
}

// 2. User All Carts
export const userCarts = () => async (dispatch) => {
    try {
        dispatch({ type: USER_CARTS_REQUEST })

        const { data } = await axios.get('http://localhost:5000/api/carts')
        console.log(data)
        dispatch({ type: USER_CARTS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: USER_CARTS_FAIL,
            payload: error.response.data.error
        })
    }
}

// 3. Remove Item from Cart List
export const removeCart = (id) => async (dispatch) => {
    try {
        dispatch({ type: REMOVE_CART_REQUEST })

        const { data } = await axios.delete(`http://localhost:5000/api/cart/${id}`)
        console.log(data)
        dispatch({ type: REMOVE_CART_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: REMOVE_CART_FAIL,
            payload: error.response.data.error
        })
    }
}