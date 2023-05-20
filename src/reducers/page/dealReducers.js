import { CATEGORY_DEAL_FAIL, CATEGORY_DEAL_REQUEST, CATEGORY_DEAL_SUCCESS, DELETE_DEAL_FAIL, DELETE_DEAL_REQUEST, DELETE_DEAL_RESET, DELETE_DEAL_SUCCESS, NEW_DEAL_FAIL, NEW_DEAL_REQUEST, NEW_DEAL_RESET, NEW_DEAL_SUCCESS, UPDATE_DEAL_FAIL, UPDATE_DEAL_REQUEST, UPDATE_DEAL_RESET, UPDATE_DEAL_SUCCESS } from "../../constants/page/dealConstants";


export const dealReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_DEAL_REQUEST:
        case CATEGORY_DEAL_REQUEST:
        case UPDATE_DEAL_REQUEST:
        case DELETE_DEAL_REQUEST:
            return {
                loading: true
            }
        case NEW_DEAL_SUCCESS:
            return {
                loading: false,
                dealCreated: action.payload
            }
        case CATEGORY_DEAL_SUCCESS:
            return {
                loading: false,
                deal: action.payload
            }
        case UPDATE_DEAL_SUCCESS:
            return {
                loading: false,
                dealUpdated: action.payload
            }
        case DELETE_DEAL_SUCCESS:
            return {
                loading: false,
                dealDeleted: action.payload
            }
        case NEW_DEAL_FAIL:
        case CATEGORY_DEAL_FAIL:
        case UPDATE_DEAL_FAIL:
        case DELETE_DEAL_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case NEW_DEAL_RESET:
            return {
                ...state,
                dealCreated: false
            }
        case UPDATE_DEAL_RESET:
            return {
                ...state,
                dealUpdated: false
            }
        case DELETE_DEAL_RESET:
            return {
                ...state,
                dealDeleted: false
            }
        default:
            return {
                ...state
            }

    }
}



