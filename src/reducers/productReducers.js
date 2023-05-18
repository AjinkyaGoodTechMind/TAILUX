import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, CREATE_PRODUCT_FAIL, CREATE_PRODUCT_SUCCESS, CLEAR_ERRORS, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_RESET, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL, DELETE_PRODUCT_FAIL, UPDATE_PRODUCT_RESET, DELETE_PRODUCT_RESET } from "../constants/productConstants"


export const productReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_PRODUCT_REQUEST:
        case UPDATE_PRODUCT_REQUEST:
        case DELETE_PRODUCT_REQUEST:
            return {
                loading: true
            }
        case CREATE_PRODUCT_SUCCESS:
            return {
                loading: false,
                productCreated: action.payload
            }
        case UPDATE_PRODUCT_SUCCESS:
            return {
                loading: false,
                productUpdated: action.payload
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                loading: false,
                productDeleted: action.payload
            }
        case CREATE_PRODUCT_FAIL:
        case UPDATE_PRODUCT_FAIL:
        case DELETE_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CREATE_PRODUCT_RESET:
            return {
                ...state,
                productCreated: false
            }
        case UPDATE_PRODUCT_RESET:
            return {
                ...state,
                productUpdated: false
            }
        case DELETE_PRODUCT_RESET:
            return {
                ...state,
                productDeleted: false
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

export const productsReducer = (state = { products: [] }, action) => {
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