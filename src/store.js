import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducers'
import { productDetailsReducer, productReducer, productsReducer } from './reducers/productReducers'
import { cartReducer, cartsReducer } from './reducers/cartReducers'
import { addressReducer } from './reducers/addressReducers'

const middleware = [thunk]

const reducer = combineReducers({
    user: userReducer,
    product: productReducer,
    products: productsReducer,
    productDetails: productDetailsReducer,
    carts: cartsReducer,
    cart: cartReducer,
    address: addressReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store