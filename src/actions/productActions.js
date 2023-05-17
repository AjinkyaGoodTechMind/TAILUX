import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from "../constants/productConstants"
import axios from 'axios'

export const allProducts = () => async(dispatch) => {
    try {
        dispatch({type:ALL_PRODUCT_REQUEST})

        const { data } = await axios.get('http://localhost:5000/api/products')

        dispatch({type:ALL_PRODUCT_SUCCESS, payload:data})
        console.log(data)
    } catch (error) {
        dispatch({type:ALL_PRODUCT_FAIL, payload:error.response.data.message})
    }
}

export const productDetails = (id) => async(dispatch) => {
    try {
        dispatch({type:PRODUCT_DETAIL_REQUEST})

        const { data} = await axios.get(`http://localhost:5000/api/product/${id}`)

        console.log(data)
        dispatch({ type:PRODUCT_DETAIL_SUCCESS, payload:data})
        
    } catch (error) {
        dispatch({
            type:PRODUCT_DETAIL_FAIL,
            payload:error.response.data.message
        })
    }
}