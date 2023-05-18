import axios from 'axios'
import { DELETE_ADDRESS_FAIL, DELETE_ADDRESS_REQUEST, DELETE_ADDRESS_SUCCESS, NEW_ADDRESS_FAIL, NEW_ADDRESS_REQUEST, NEW_ADDRESS_SUCCESS, UPDATE_ADDRESS_FAIL, UPDATE_ADDRESS_REQUEST, UPDATE_ADDRESS_SUCCESS, USER_ADDRESSES_FAIL, USER_ADDRESSES_REQUEST, USER_ADDRESSES_SUCCESS } from '../constants/addressConstants'

// 1. Create New Address
export const createAddress = (addressDetails) => async (dispatch) => {
    try {
        dispatch({ type: NEW_ADDRESS_REQUEST })

        const { data } = await axios.post('http://localhost:5000/api/address/new', addressDetails)

        dispatch({ type: NEW_ADDRESS_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: NEW_ADDRESS_FAIL,
            payload: error.response.data.error
        })
    }
}

// 2. Get User Addresses
export const userAddresses = () => async (dispatch) => {
    try {
        dispatch({ type: USER_ADDRESSES_REQUEST })

        const { data } = await axios.post('http://localhost:5000/api/addresses')

        dispatch({ type: USER_ADDRESSES_SUCCESS, payload: data.addresses })

    } catch (error) {
        dispatch({
            type: USER_ADDRESSES_FAIL,
            payload: error.response.data.error
        })
    }
}

// 3. Update Address
export const updateAddress = (id, addressDetails) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_ADDRESS_REQUEST })

        const { data } = await axios.delete(`http://localhost:5000/api/address/${id}`, addressDetails)

        dispatch({ type: UPDATE_ADDRESS_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: UPDATE_ADDRESS_FAIL,
            payload: error.response.data.error
        })
    }
}

// 2. Delete Address
export const deleteAddress = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_ADDRESS_REQUEST })

        const { data } = await axios.patch(`http://localhost:5000/api/addresses/${id}`)

        dispatch({ type: DELETE_ADDRESS_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: DELETE_ADDRESS_FAIL,
            payload: error.response.data.error
        })
    }
}