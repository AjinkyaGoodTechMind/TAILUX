import axios from 'axios'
import { CATEGORY_TRENDING_FAIL, CATEGORY_TRENDING_REQUEST, CATEGORY_TRENDING_SUCCESS, DELETE_TRENDING_FAIL, DELETE_TRENDING_REQUEST, DELETE_TRENDING_SUCCESS, NEW_TRENDING_FAIL, NEW_TRENDING_REQUEST, NEW_TRENDING_SUCCESS, UPDATE_TRENDING_FAIL, UPDATE_TRENDING_REQUEST, UPDATE_TRENDING_SUCCESS } from '../../constants/page/trendingConstants'


// 1. Create New Trending
export const newTrending = (trendingData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_TRENDING_REQUEST })

        const config = { headers: { "content-type": "multipart/form-data" } }

        const { data } = await axios.post('http://localhost:5000/api/trending/new', trendingData, config)

        dispatch({
            type: NEW_TRENDING_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: NEW_TRENDING_FAIL,
            payload: error.response.data.message
        })
    }
}


// 2. Get Trending by Category
export const categoryTrending = (categoryName) => async (dispatch) => {
    try {

        dispatch({ type: CATEGORY_TRENDING_REQUEST })

        const { data } = await axios.get(`http://localhost:5000/api/trending/category/${categoryName}`)

        dispatch({ type: CATEGORY_TRENDING_SUCCESS, payload: data.trending })

    } catch (error) {

        dispatch({
            type: CATEGORY_TRENDING_FAIL,
            payload: error.response.data.message
        })
    }
}

// 3. Update Trending
export const updateTrending = (id, trendingData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_TRENDING_REQUEST })

        const config = { headers: { "content-type": "multipart/form-data" } }

        const { data } = await axios.patch(`http:localhost:5000/api/trending/${id}`, trendingData, config)

        dispatch({ type: UPDATE_TRENDING_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: UPDATE_TRENDING_FAIL,
            payload: error.response.data.message
        })
    }
}

// 4. Delete Trending
export const deleteTrending = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_TRENDING_REQUEST })

        const { data } = await axios.patch(`http:localhost:5000/api/trending/${id}`)

        dispatch({ type: DELETE_TRENDING_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: DELETE_TRENDING_FAIL,
            payload: error.response.data.message
        })
    }
}