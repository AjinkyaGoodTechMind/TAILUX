import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducers'
import { productDetailsReducer, productReducer, productsReducer } from './reducers/productReducers'
import { cartReducer, cartsReducer } from './reducers/cartReducers'
import { addressReducer, addressesReducer } from './reducers/addressReducers'
import { sizeReducer, sizesReducer } from './reducers/sizeReducers'
import { collectOrderReducer, orderReducer, ordersReducer } from './reducers/orderReducers'
import { carouselReducer } from './reducers/page/carouselReducers'
import { dealReducer } from './reducers/page/dealReducers'
import { trendingReducer } from './reducers/page/trendingReducers'
import { collectCustomProductReducer, customProductReducer, customProductsReducer } from './reducers/customProductReducer'

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
    collectOrderData: collectOrderReducer,
    carousel: carouselReducer,
    deal: dealReducer,
    trending: trendingReducer,
    customProduct: customProductReducer,
    customProducts: customProductsReducer,
    collectCustomProductData: collectCustomProductReducer

})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store