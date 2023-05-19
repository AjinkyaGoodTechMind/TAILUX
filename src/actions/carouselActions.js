import axios from 'axios'
import { NEW_CAROUSEL_FAIL, NEW_CAROUSEL_REQUEST, NEW_CAROUSEL_SUCCESS } from '../constants/carouselConstants'

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