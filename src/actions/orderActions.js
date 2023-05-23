import axios from 'axios'
import { NEW_ORDER_FAIL, NEW_ORDER_REQUEST, NEW_ORDER_SUCCESS, UPDATE_ORDER_FAIL, UPDATE_ORDER_REQUEST, UPDATE_ORDER_SUCCESS, USER_ORDERS_FAIL, USER_ORDERS_REQUEST, USER_ORDERS_SUCCESS } from '../constants/orderConstants'

// 1. Create New Order
export const createOrder = (orderDetails) => async (dispatch) => {
    try {
        dispatch({ type: NEW_ORDER_REQUEST })

        const { data } = await axios.post('http://localhost:5000/api/order/new', orderDetails)

        dispatch({ type: NEW_ORDER_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: NEW_ORDER_FAIL,
            payload: error.response.data.error
        })
    }
}

// 2. Get User Orders
export const userOrders = () => async (dispatch) => {
    try {
        dispatch({ type: USER_ORDERS_REQUEST })

        const { data } = await axios.get('http://localhost:5000/api/orders')

        dispatch({ type: USER_ORDERS_SUCCESS, payload: data.orders })

    } catch (error) {
        dispatch({
            type: USER_ORDERS_FAIL,
            payload: error.response.data.error
        })
    }
}

// 3. Update Order
export const updateOrder = (id, orderDetail) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_ORDER_REQUEST })

        const { data } = await axios.patch(`http://localhost:5000/api/order/${id}`, orderDetail)

        dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: UPDATE_ORDER_FAIL,
            error: error.response.data.message
        })
    }
}



