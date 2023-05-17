import { USER_CARTS_FAIL, USER_CARTS_REQUEST, USER_CARTS_SUCCESS, CLEAR_ERRORS, ADD_TO_CART_FAIL, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, REMOVE_CART_REQUEST, REMOVE_CART_SUCCESS, REMOVE_CART_FAIL, ADD_TO_CART_RESET, REMOVE_CART_RESET } from "../constants/cartConstants"

export const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART_REQUEST:
        case REMOVE_CART_REQUEST:
            return {
                loading: true
            }
        case ADD_TO_CART_SUCCESS:
            return {
                loading: false,
                cartAdded: action.payload
            }
        case REMOVE_CART_SUCCESS:
            return {
                loading: false,
                cartRemoved: action.payload
            }
        case REMOVE_CART_FAIL:
            return {
                loading: false,
                success: false,
                error: action.payload
            }
        case ADD_TO_CART_FAIL:
            return {
                loading: false,
                cart: null,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        case ADD_TO_CART_RESET:
            return {
                ...state,
                cartAdded: false
            }
        case REMOVE_CART_RESET:
            return {
                ...state,
                cartRemoved: false
            }
        default:
            return {
                ...state
            }
    }
}

export const cartsReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case USER_CARTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_CARTS_SUCCESS:
            return {
                loading: false,
                cartItems: action.payload.cartItems
            }
        case USER_CARTS_FAIL:
            return {
                loading: false,
                cartItems: null,
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


