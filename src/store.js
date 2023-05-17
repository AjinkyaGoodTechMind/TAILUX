import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducers'
import { productDetailsReducer, productsReducer } from './reducers/productReducers'

const middleware = [thunk]

const reducer = combineReducers({
    user:userReducer,
    products:productsReducer,
    productDetails:productDetailsReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store