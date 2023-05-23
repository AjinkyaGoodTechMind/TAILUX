import { LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, USER_LOGOUT } from "../constants/userConstants";
import axios from 'axios'

// 1. Register
export const register = (userData) => async (dispatch) => {
    try {

        dispatch({ type: REGISTER_USER_REQUEST })

        const config = { headers: { "content-type": "multipart/form-data" } }

        const { data } = await axios.post(`http://localhost:5000/api/register`, userData, config)

        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user })

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// 2. Login
export const login = (userData) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })

        const { data } = await axios.post("http://localhost:5000/api/login", userData)

        dispatch({ type: LOGIN_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

// 3. User Details
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST })

        const { data } = await axios.get(`http://localhost:5000/api/me`)
        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user })

    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// 4. Logout
export const logout = () => async (dispatch) => {

    await axios('http://localhost:5000/api/logout')

    dispatch({ type: USER_LOGOUT })
}

// 5. Update Profile
export const updateProfile = (id, userDetail) => async (dispatch) => {

    try {

        dispatch({ type: UPDATE_PROFILE_REQUEST })

        const { data } = await axios.patch(`http://localhost:5000/api/user/${id}`, userDetail)

        dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success })
    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL, payload: error.response.data.error
        })
    }
}