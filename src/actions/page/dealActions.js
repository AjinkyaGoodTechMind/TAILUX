import axios from 'axios'
import { CATEGORY_DEAL_FAIL, CATEGORY_DEAL_REQUEST, CATEGORY_DEAL_SUCCESS, DELETE_DEAL_FAIL, DELETE_DEAL_REQUEST, DELETE_DEAL_SUCCESS, NEW_DEAL_FAIL, NEW_DEAL_REQUEST, NEW_DEAL_SUCCESS, UPDATE_DEAL_FAIL, UPDATE_DEAL_REQUEST, UPDATE_DEAL_SUCCESS } from '../../constants/page/dealConstants'


// 1. Create New Deal
export const newDeal = (data) => async (dispatch) => {
    try {

        dispatch({ type: NEW_DEAL_REQUEST })

        const config = { headers: { "content-type": "multipart/form-data" } }

        const { data } = await axios.post('http://localhost:5000/api/deal/new', data, config)

        dispatch({
            type: NEW_DEAL_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: NEW_DEAL_FAIL,
            payload: error.response.message.error
        })
    }
}


// 2. Get Deal by Category
export const categoryDeal = (categoryName) => async (dispatch) => {
    try {

        dispatch({ type: CATEGORY_DEAL_REQUEST })

        const { data } = await axios.get(`http://localhost:5000/api/deal/category/${categoryName}`)
        console.log(data)
        dispatch({ type: CATEGORY_DEAL_SUCCESS, payload: data.deal })

    } catch (error) {
        console.log(error)
        dispatch({
            type: CATEGORY_DEAL_FAIL,
            payload: error.response.message.error
        })
    }
}

// 3. Update Deal
export const updateDeal = (id, data) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_DEAL_REQUEST })

        const config = { headers: { "content-type": "multipart/form-data" } }

        const { data } = await axios.patch(`http:localhost:5000/api/deal/${id}`, data, config)

        dispatch({ type: UPDATE_DEAL_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: UPDATE_DEAL_FAIL,
            payload: error.response.message.error
        })
    }
}

// 4. Delete Deal
export const deleteDeal = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_DEAL_REQUEST })

        const { data } = await axios.patch(`http:localhost:5000/api/deal/${id}`)

        dispatch({ type: DELETE_DEAL_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: DELETE_DEAL_FAIL,
            payload: error.response.message.error
        })
    }
}