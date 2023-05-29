import { DELETE_CUSTOM_PRODUCT_FAIL, DELETE_CUSTOM_PRODUCT_REQUEST, DELETE_CUSTOM_PRODUCT_RESET, DELETE_CUSTOM_PRODUCT_SUCCESS, NEW_CUSTOM_PRODUCT_FAIL, NEW_CUSTOM_PRODUCT_REQUEST, NEW_CUSTOM_PRODUCT_RESET, NEW_CUSTOM_PRODUCT_SUCCESS, UPDATE_CUSTOM_PRODUCT_FAIL, UPDATE_CUSTOM_PRODUCT_REQUEST, UPDATE_CUSTOM_PRODUCT_RESET, UPDATE_CUSTOM_PRODUCT_SUCCESS, USER_CUSTOM_PRODUCTS_FAIL, USER_CUSTOM_PRODUCTS_REQUEST, USER_CUSTOM_PRODUCTS_SUCCESS } from "../constants/customProductConstants";


export const customProductReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_CUSTOM_PRODUCT_REQUEST:
        case UPDATE_CUSTOM_PRODUCT_REQUEST:
        case DELETE_CUSTOM_PRODUCT_REQUEST:
            return {
                loading: true
            }
        case NEW_CUSTOM_PRODUCT_SUCCESS:
            return {
                loading: false,
                customProductCreated: action.payload
            }
        case UPDATE_CUSTOM_PRODUCT_SUCCESS:
            return {
                loading: false,
                customProductUpdated: action.payload
            }
        case DELETE_CUSTOM_PRODUCT_SUCCESS:
            return {
                loading: false,
                customProductDeleted: action.payload
            }
        case NEW_CUSTOM_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case UPDATE_CUSTOM_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case DELETE_CUSTOM_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case NEW_CUSTOM_PRODUCT_RESET:
            return {
                ...state,
                customProductCreated: false
            }
        case UPDATE_CUSTOM_PRODUCT_RESET:
            return {
                ...state,
                customProductUpdated: false
            }
        case DELETE_CUSTOM_PRODUCT_RESET:
            return {
                ...state,
                customProductDeleted: false
            }
        default:
            return {
                ...state
            }
    }
}

export const customProductsReducer = (state = {}, action) => {
    switch (action.payload) {
        case USER_CUSTOM_PRODUCTS_REQUEST:
            return {
                loading: true
            }
        case USER_CUSTOM_PRODUCTS_SUCCESS:
            return {
                loading: false,
                customProducts: action.payload
            }
        case USER_CUSTOM_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return {
                ...state
            }
    }
}