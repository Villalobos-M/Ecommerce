import { productActions } from "../actions"

const INITIAL_STATE = {
   productsList: [],
   productDetail:{}
}

const productReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case productActions.setProductList:
         return {
            ...state, productsList: action.payload
         }
         
      case productActions.setProductDetail:
         return {
            ...state, productDetail: action.payload
         }
   
      default: 
         return state;
   }
}

export default productReducer;