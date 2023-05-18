import axios from 'axios'
import { DELETE_SIZE_FAIL, DELETE_SIZE_REQUEST, DELETE_SIZE_SUCCESS, NEW_SIZE_FAIL, NEW_SIZE_REQUEST, NEW_SIZE_SUCCESS, UPDATE_SIZE_FAIL, UPDATE_SIZE_REQUEST, UPDATE_SIZE_SUCCESS, USER_SIZES_FAIL, USER_SIZES_REQUEST, USER_SIZES_SUCCESS } from '../constants/sizeConstants'

// 1. Create New Size
export const createSize = (sizeDetails) => async (dispatch) => {
    try {
        dispatch({ type: NEW_SIZE_REQUEST })

        const { data } = await axios.post('http://localhost:5000/api/size/new', sizeDetails)

        dispatch({ type: NEW_SIZE_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: NEW_SIZE_FAIL,
            payload: error.response.data.error
        })
    }
}

// 2. Get User Sizees
export const userSizes = () => async (dispatch) => {
    try {
        dispatch({ type: USER_SIZES_REQUEST })

        const { data } = await axios.get('http://localhost:5000/api/sizes')

        dispatch({ type: USER_SIZES_SUCCESS, payload: data.addresses })

    } catch (error) {
        dispatch({
            type: USER_SIZES_FAIL,
            payload: error.response.data.error
        })
    }
}

// 3. Update Size
export const updateSize = (id, sizeDetails) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_SIZE_REQUEST })

        const { data } = await axios.patch(`http://localhost:5000/api/size/${id}`, sizeDetails)

        dispatch({ type: UPDATE_SIZE_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: UPDATE_SIZE_FAIL,
            payload: error.response.data.error
        })
    }
}

// 4. Delete Size
export const deleteSize = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_SIZE_REQUEST })

        const { data } = await axios.patch(`http://localhost:5000/api/size/${id}`)

        dispatch({ type: DELETE_SIZE_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: DELETE_SIZE_FAIL,
            payload: error.response.data.error
        })
    }
}