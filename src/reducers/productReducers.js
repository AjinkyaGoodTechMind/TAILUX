import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, CLEAR_ERRORS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from "../constants/productConstants"


export const productsReducer = (state = { products:[]}, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload.products
            }
        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload,
                products: null
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return {
                ...state
            }
    }
}

export const productDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return {
                loading: true
            }
        case PRODUCT_DETAIL_SUCCESS:
            return {
                loading: false,
                product: action.payload.product
            }
        case PRODUCT_DETAIL_FAIL:
            return {
                loading: false,
                product: null,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return {
                ...state
            }
    }
}