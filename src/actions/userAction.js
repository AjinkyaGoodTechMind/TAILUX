import { LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/userConstant";
import axios from 'axios'

// Register
export const register = (userData) => async (dispatch) => {
    try {

        dispatch({ type: REGISTER_USER_REQUEST })

        // const config = { headers: { "content-type": "multipart/form-data" } }

        const { data } = await axios.post(`http://localhost:5000/api/register`, userData)
        console.log(data)
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

export const login = (userData) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })

        const { data } = await axios.post("http://localhost:5000/api/login", userData)
        console.log(data)

        dispatch({ type: LOGIN_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}


export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST })

        const { data } = await axios.get(`http://localhost:5000/api/me`)
        console.log(data)
        dispatch({ type: LOAD_USER_SUCCESS, payload: data })

    } catch (error) {
        console.log(error)
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
} 