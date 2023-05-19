import axios from 'axios'
import { ALL_CAROUSEL_FAIL, ALL_CAROUSEL_REQUEST, ALL_CAROUSEL_SUCCESS, NEW_CAROUSEL_FAIL, NEW_CAROUSEL_REQUEST, NEW_CAROUSEL_SUCCESS } from '../constants/carouselConstants'

export const newCarousel = (data) => async (dispatch) => {
    try {

        dispatch({ type: NEW_CAROUSEL_REQUEST })

        const config = { headers: { "content-type": "multipart/form-data" } }

        const { data } = await axios.post('http://localhost:5000/api/carousel/new', data, config)

        dispatch({
            type: NEW_CAROUSEL_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: NEW_CAROUSEL_FAIL,
            payload: error.response.message.error
        })
    }
}

export const allCarousel = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_CAROUSEL_REQUEST })

        const { data } = await axios.get("http://localhost:5000/api/carousels")

        dispatch({ type: ALL_CAROUSEL_SUCCESS, payload: data.carousels })

    } catch (error) {
        dispatch({
            type: ALL_CAROUSEL_FAIL,
            payload: error.response.message.error
        })
    }
}