import { CATEGORY_TRENDING_FAIL, CATEGORY_TRENDING_REQUEST, CATEGORY_TRENDING_SUCCESS, DELETE_TRENDING_FAIL, DELETE_TRENDING_REQUEST, DELETE_TRENDING_RESET, DELETE_TRENDING_SUCCESS, NEW_TRENDING_FAIL, NEW_TRENDING_REQUEST, NEW_TRENDING_RESET, NEW_TRENDING_SUCCESS, UPDATE_TRENDING_FAIL, UPDATE_TRENDING_REQUEST, UPDATE_TRENDING_RESET, UPDATE_TRENDING_SUCCESS } from "../../constants/page/trendingConstants";


export const trendingReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_TRENDING_REQUEST:
        case CATEGORY_TRENDING_REQUEST:
        case UPDATE_TRENDING_REQUEST:
        case DELETE_TRENDING_REQUEST:
            return {
                loading: true
            }
        case NEW_TRENDING_SUCCESS:
            return {
                loading: false,
                trendingCreated: action.payload
            }
        case CATEGORY_TRENDING_SUCCESS:
            return {
                loading: false,
                trending: action.payload
            }
        case UPDATE_TRENDING_SUCCESS:
            return {
                loading: false,
                trendingUpdated: action.payload
            }
        case DELETE_TRENDING_SUCCESS:
            return {
                loading: false,
                trendingDeleted: action.payload
            }
        case NEW_TRENDING_FAIL:
        case CATEGORY_TRENDING_FAIL:
        case UPDATE_TRENDING_FAIL:
        case DELETE_TRENDING_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case NEW_TRENDING_RESET:
            return {
                ...state,
                trendingCreated: false
            }
        case UPDATE_TRENDING_RESET:
            return {
                ...state,
                trendingUpdated: false
            }
        case DELETE_TRENDING_RESET:
            return {
                ...state,
                trendingDeleted: false
            }
        default:
            return {
                ...state
            }

    }
}



