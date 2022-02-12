import appReducer from "./appReducer"
import cartReducer from "./cartReducer"
import categoryReducer from "./categoryReducer"
import productReducer from "./productReducer"
import ordersReducer from "./ordersReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
   app: appReducer,
   cart: cartReducer,
   category: categoryReducer,
   product: productReducer,
   orders: ordersReducer
})
export default rootReducer;