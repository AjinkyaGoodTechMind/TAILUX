import { CATEGORY_CAROUSEL_FAIL, CATEGORY_CAROUSEL_REQUEST, CATEGORY_CAROUSEL_SUCCESS, DELETE_CAROUSEL_FAIL, DELETE_CAROUSEL_REQUEST, DELETE_CAROUSEL_RESET, DELETE_CAROUSEL_SUCCESS, NEW_CAROUSEL_FAIL, NEW_CAROUSEL_REQUEST, NEW_CAROUSEL_RESET, NEW_CAROUSEL_SUCCESS, UPDATE_CAROUSEL_FAIL, UPDATE_CAROUSEL_REQUEST, UPDATE_CAROUSEL_RESET, UPDATE_CAROUSEL_SUCCESS } from "../constants/carouselConstants";


export const carouselReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_CAROUSEL_REQUEST:
        case CATEGORY_CAROUSEL_REQUEST:
        case UPDATE_CAROUSEL_REQUEST:
        case DELETE_CAROUSEL_REQUEST:
            return {
                loading: true
            }
        case NEW_CAROUSEL_SUCCESS:
            return {
                loading: false,
                carouselCreated: action.payload
            }
        case CATEGORY_CAROUSEL_SUCCESS:
            return {
                loading: false,
                carousel: action.payload
            }
        case UPDATE_CAROUSEL_SUCCESS:
            return {
                loading: false,
                carouselUpdated: action.payload
            }
        case DELETE_CAROUSEL_SUCCESS:
            return {
                loading: false,
                carouselDeleted: action.payload
            }
        case NEW_CAROUSEL_FAIL:
        case CATEGORY_CAROUSEL_FAIL:
        case UPDATE_CAROUSEL_FAIL:
        case DELETE_CAROUSEL_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case NEW_CAROUSEL_RESET:
            return {
                ...state,
                carouselCreated: false
            }
        case UPDATE_CAROUSEL_RESET:
            return {
                ...state,
                carouselUpdated: false
            }
        case DELETE_CAROUSEL_RESET:
            return {
                ...state,
                carouselDeleted: false
            }
        default:
            return {
                ...state
            }

    }
}



