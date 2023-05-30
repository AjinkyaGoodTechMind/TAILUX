import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, CREATE_PRODUCT_FAIL, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_REQUEST, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, PRODUCT_BY_CATEGORY_REQUEST, PRODUCT_BY_CATEGORY_FAIL, PRODUCT_BY_CATEGORY_SUCCESS } from "../constants/productConstants"
import axios from 'axios'


// 1. Create Product --Admin
export const createProduct = (productDetails) => async (dispatch) => {
    try {

        dispatch({ type: CREATE_PRODUCT_REQUEST })

        const config = { headers: { "content-type": "multipart/form-data" } }

        const { data } = await axios.post(`http://localhost:5000/api/product/new`, productDetails, config)

        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: CREATE_PRODUCT_FAIL,
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

// 4. Update Product --Admin
export const updateProduct = (id, productDetails) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST })

        const config = { headers: { "content-type": "multipart/form-data" } }

        const { data } = await axios.patch(`http://localhost:5000/api/product/${id}`, productDetails, config)

        dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAIL,
            payload: error.response.data.error
        })
    }
}

// 4. DELETE Product --Admin
export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST })

        const { data } = await axios.delete(`http://localhost:5000/api/product/${id}`)

        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload: error.response.data.error
        })
    }
}

// 5. Get Products by category
export const productsByCategory = (category) => async (dispatch) => {
    try {

        dispatch({ type: PRODUCT_BY_CATEGORY_REQUEST })

        const { data } = await axios.get(`http://localhost:5000/api/products/${category}`)

        dispatch({ type: PRODUCT_BY_CATEGORY_SUCCESS, payload: data.products })

    } catch (error) {
        dispatch({
            type: PRODUCT_BY_CATEGORY_FAIL, payload: error.response.data.message
        })
    }
}