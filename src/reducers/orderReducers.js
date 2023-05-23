import { CLEAR_ERRORS, NEW_ORDER_FAIL, NEW_ORDER_REQUEST, NEW_ORDER_RESET, NEW_ORDER_SUCCESS, UPDATE_ORDER_FAIL, UPDATE_ORDER_REQUEST, UPDATE_ORDER_RESET, UPDATE_ORDER_SUCCESS, USER_ORDERS_FAIL, USER_ORDERS_REQUEST, USER_ORDERS_SUCCESS } from '../constants/orderConstants'

export const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_ORDER_REQUEST:
        case UPDATE_ORDER_REQUEST:
            return {
                loading: true
            }
        case NEW_ORDER_SUCCESS:
            return {
                loading: false,
                orderCreated: action.payload
            }
        case UPDATE_ORDER_SUCCESS:
            return {
                loading: false,
                orderUpdated: action.payload
            }
        case NEW_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case UPDATE_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case NEW_ORDER_RESET:
            return {
                ...state,
                sizeCreated: false
            }
        case UPDATE_ORDER_RESET:
            return {
                ...state,
                orderUpdated: false
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

export const ordersReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_ORDERS_REQUEST:
            return {
                loading: true
            }
        case USER_ORDERS_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }
        case USER_ORDERS_FAIL:
            return {
                loading: false,
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