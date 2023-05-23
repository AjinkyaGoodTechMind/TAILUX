import axios from 'axios'
import { CATEGORY_CAROUSEL_FAIL, CATEGORY_CAROUSEL_REQUEST, CATEGORY_CAROUSEL_SUCCESS, DELETE_CAROUSEL_FAIL, DELETE_CAROUSEL_REQUEST, DELETE_CAROUSEL_SUCCESS, NEW_CAROUSEL_FAIL, NEW_CAROUSEL_REQUEST, NEW_CAROUSEL_SUCCESS, UPDATE_CAROUSEL_FAIL, UPDATE_CAROUSEL_REQUEST, UPDATE_CAROUSEL_SUCCESS } from '../../constants/page/carouselConstants'


// 1. Create New Carousel
export const newCarousel = (carouselData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_CAROUSEL_REQUEST })

        const config = { headers: { "content-type": "multipart/form-data" } }

        const { data } = await axios.post('http://localhost:5000/api/carousel/new', carouselData, config)

        dispatch({
            type: NEW_CAROUSEL_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: NEW_CAROUSEL_FAIL,
            payload: error.response.data.message
        })
    }
}


// 2. Get Carousel by Category
export const categoryCarousel = (categoryName) => async (dispatch) => {
    try {

        dispatch({ type: CATEGORY_CAROUSEL_REQUEST })

        const { data } = await axios.get(`http://localhost:5000/api/carousel/category/${categoryName}`)

        dispatch({ type: CATEGORY_CAROUSEL_SUCCESS, payload: data.carousel })

    } catch (error) {

        dispatch({
            type: CATEGORY_CAROUSEL_FAIL,
            payload: error.response.data.message
        })
    }
}

// 3. Update Carousel
export const updateCarousel = (id, carouselDetails) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_CAROUSEL_REQUEST })

        const config = { headers: { "content-type": "multipart/form-data" } }

        const { data } = await axios.patch(`http:localhost:5000/api/carousel/${id}`, carouselDetails, config)

        dispatch({ type: UPDATE_CAROUSEL_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: UPDATE_CAROUSEL_FAIL,
            payload: error.response.data.message
        })
    }
}

// 4. Delete Carousel
export const deleteCarousel = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_CAROUSEL_REQUEST })

        const { data } = await axios.patch(`http:localhost:5000/api/carousel/${id}`)

        dispatch({ type: DELETE_CAROUSEL_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: DELETE_CAROUSEL_FAIL,
            payload: error.response.data.message
        })
    }
}