import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducers'
import { productDetailsReducer, productReducer, productsReducer } from './reducers/productReducers'
import { cartReducer, cartsReducer } from './reducers/cartReducers'
import { addressReducer, addressesReducer } from './reducers/addressReducers'
import { sizeReducer, sizesReducer } from './reducers/sizeReducers'
import { orderReducer, ordersReducer } from './reducers/orderReducers'
import { carouselReducer, carouselsReducer } from './reducers/carouselReducers'

const middleware = [thunk]

const reducer = combineReducers({
    user: userReducer,
    product: productReducer,
    products: productsReducer,
    productDetails: productDetailsReducer,
    carts: cartsReducer,
    cart: cartReducer,
    address: addressReducer,
    addresses: addressesReducer,
    size: sizeReducer,
    sizes: sizesReducer,
    order: orderReducer,
    orders: ordersReducer,
    carousel: carouselReducer,
    carousels: carouselsReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store