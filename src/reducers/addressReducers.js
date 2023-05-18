import { CLEAR_ERRORS, DELETE_ADDRESS_REQUEST, DELETE_ADDRESS_RESET, DELETE_ADDRESS_SUCCESS, NEW_ADDRESS_REQUEST, NEW_ADDRESS_RESET, NEW_ADDRESS_SUCCESS, UPDATE_ADDRESS_REQUEST, UPDATE_ADDRESS_RESET, UPDATE_ADDRESS_SUCCESS, USER_ADDRESSES_FAIL, USER_ADDRESSES_REQUEST, USER_ADDRESSES_SUCCESS } from "../constants/addressConstants";


export const addressReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_ADDRESS_REQUEST:
        case UPDATE_ADDRESS_REQUEST:
        case DELETE_ADDRESS_REQUEST:
            return {
                loading: true
            }
        case NEW_ADDRESS_SUCCESS:
            return {
                loading: false,
                addressCreated: action.payload
            }
        case UPDATE_ADDRESS_SUCCESS:
            return {
                loading: false,
                addressUpdated: action.payload
            }
        case DELETE_ADDRESS_SUCCESS:
            return {
                loading: false,
                addressDeleted: action.payload
            }
        case NEW_ADDRESS_RESET:
            return {
                ...state,
                addressCreated: false
            }
        case UPDATE_ADDRESS_RESET:
            return {
                ...state,
                addressUpdated: false
            }
        case DELETE_ADDRESS_RESET:
            return {
                ...state,
                addressDeleted: false
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

export const addressesReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_ADDRESSES_REQUEST:
            return {
                loading: true
            }
        case USER_ADDRESSES_SUCCESS:
            return {
                loading: false,
                addresses: action.payload
            }
        case USER_ADDRESSES_FAIL:
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