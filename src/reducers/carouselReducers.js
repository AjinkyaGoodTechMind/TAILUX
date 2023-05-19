import { NEW_CAROUSEL_FAIL, NEW_CAROUSEL_REQUEST, NEW_CAROUSEL_RESET, NEW_CAROUSEL_SUCCESS } from "../constants/carouselConstants";


export const carouselReducer = (state = {}, action) => {
    switch (action.payload) {
        case NEW_CAROUSEL_REQUEST:
            return {
                loading: true
            }
        case NEW_CAROUSEL_SUCCESS:
            return {
                loading: false,
                carouselCreated: action.payload
            }
        case NEW_CAROUSEL_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case NEW_CAROUSEL_RESET:
            return {
                ...state,
                carouselCreated: false
            }
        default:
            return {
                ...state
            }

    }
}