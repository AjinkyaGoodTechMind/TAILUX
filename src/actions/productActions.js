import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, CERATE_PRODUCT_FAIL, CERATE_PRODUCT_SUCCESS, CREATE_PRODUCT_REQUEST, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from "../constants/productConstants"
import axios from 'axios'


// 1. Create Product --Admin
export const createProduct = (productDetails) => async (dispatch) => {
    try {

        dispatch({ type: CREATE_PRODUCT_REQUEST })

        const config = { headers: { "content-type": "multipart/form-data" } }

        const { data } = await axios.post(`http://localhost:5000/api/product/new`, productDetails, config)

        dispatch({ type: CERATE_PRODUCT_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: CERATE_PRODUCT_FAIL,
            payload: error.response.data.error
        })
    }
}

// 2. Get All Product
export const allProducts = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST })

        const { data } = await axios.get('http://localhost:5000/api/products')

        dispatch({ type: ALL_PRODUCT_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: ALL_PRODUCT_FAIL, payload: error.response.data.message })
    }
}

// 3. One Product Details
export const productDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAIL_REQUEST })

        const { data } = await axios.get(`http://localhost:5000/api/product/${id}`)

        dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_FAIL,
            payload: error.response.data.message
        })
    }
}