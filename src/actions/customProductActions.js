import axios from 'axios'
import { DELETE_CUSTOM_PRODUCT_FAIL, DELETE_CUSTOM_PRODUCT_REQUEST, DELETE_CUSTOM_PRODUCT_SUCCESS, NEW_CUSTOM_PRODUCT_FAIL, NEW_CUSTOM_PRODUCT_REQUEST, NEW_CUSTOM_PRODUCT_SUCCESS, UPDATE_CUSTOM_PRODUCT_FAIL, UPDATE_CUSTOM_PRODUCT_REQUEST, UPDATE_CUSTOM_PRODUCT_SUCCESS, USER_CUSTOM_PRODUCTS_FAIL, USER_CUSTOM_PRODUCTS_REQUEST, USER_CUSTOM_PRODUCTS_SUCCESS } from '../constants/customProductConstants'


export const createCustomProduct = (detail) => async (dispatch) => {
    try {

        dispatch({ type: NEW_CUSTOM_PRODUCT_REQUEST })

        const { data } = await axios.post(`http://localhost:5000/api/customProduct/new`, detail)

        dispatch({ type: NEW_CUSTOM_PRODUCT_SUCCESS, payload: data.success })

    } catch (error) {

        dispatch({ type: NEW_CUSTOM_PRODUCT_FAIL, payload: error.response.data.message })
    }
}

export const userCustomProducts = () => async (dispatch) => {
    try {

        dispatch({ type: USER_CUSTOM_PRODUCTS_REQUEST })

        const { data } = await axios.get('http://localhost:5000/api/customProducts')

        dispatch({ type: USER_CUSTOM_PRODUCTS_SUCCESS, payload: data.customProducts })

    } catch (error) {
        dispatch({ type: USER_CUSTOM_PRODUCTS_FAIL })
    }
}

export const deleteCustomProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_CUSTOM_PRODUCT_REQUEST })

        const { data } = await axios.delete(`http://localhost:5000/api/customProduct/${id}`)

        dispatch({ type: DELETE_CUSTOM_PRODUCT_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({ type: DELETE_CUSTOM_PRODUCT_FAIL, payload: error.respose.data.message })
    }
}

export const upadteCustomProduct = (id) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_CUSTOM_PRODUCT_REQUEST })

        const { data } = await axios.put(`http://localhost:5000/api/customProduct/${id}`)

        dispatch({ type: UPDATE_CUSTOM_PRODUCT_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({ type: UPDATE_CUSTOM_PRODUCT_FAIL, payload: error.response.data.message })
    }
}