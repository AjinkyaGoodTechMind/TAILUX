import { CLEAR_ERRORS, DELETE_SIZE_FAIL, DELETE_SIZE_REQUEST, DELETE_SIZE_RESET, DELETE_SIZE_SUCCESS, NEW_SIZE_FAIL, NEW_SIZE_REQUEST, NEW_SIZE_RESET, NEW_SIZE_SUCCESS, UPDATE_SIZE_FAIL, UPDATE_SIZE_REQUEST, UPDATE_SIZE_RESET, UPDATE_SIZE_SUCCESS, USER_SIZES_FAIL, USER_SIZES_REQUEST, USER_SIZES_SUCCESS } from '../constants/sizeConstants'

export const sizeReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_SIZE_REQUEST:
        case UPDATE_SIZE_REQUEST:
        case DELETE_SIZE_REQUEST:
            return {
                loading: true
            }
        case NEW_SIZE_SUCCESS:
            return {
                loading: false,
                sizeCreated: action.payload
            }
        case UPDATE_SIZE_SUCCESS:
            return {
                loading: false,
                sizeUpdated: action.payload
            }
        case DELETE_SIZE_SUCCESS:
            return {
                loading: false,
                sizeDeleted: action.payload
            }
        case NEW_SIZE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case UPDATE_SIZE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case DELETE_SIZE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case NEW_SIZE_RESET:
            return {
                ...state,
                sizeCreated: false
            }
        case UPDATE_SIZE_RESET:
            return {
                ...state,
                sizeUpdated: false
            }
        case DELETE_SIZE_RESET:
            return {
                ...state,
                sizeDeleted: false
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

export const sizesReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIZES_REQUEST:
            return {
                loading: true
            }
        case USER_SIZES_SUCCESS:
            return {
                loading: false,
                sizes: action.payload
            }
        case USER_SIZES_FAIL:
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