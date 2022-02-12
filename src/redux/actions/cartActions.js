import axios from 'axios';
import { getConfig } from '../../utils';
import { setIsLoading } from './appActions';

export const cartActions = {
   setCart: "SET_CART"
}


export const setCart = cart =>({
   type:cartActions.setCart,
   payload: cart
})

export const setCartBuy = buy =>({
   type:cartActions.setCartBuy,
   payload: buy
})

export const getProductsCartThunk = () =>{
   return dispatch => {
      dispatch(setIsLoading(true))
      axios.get(`https://ecommerce-exercise-backend.herokuapp.com/cart/`, getConfig())
      .then(res => dispatch(setCart(res.data)))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)))
   }
}

export const addProductCartThunk = (product) =>{
   return dispatch => {
      dispatch(setIsLoading(true))
      axios.post(`https://ecommerce-exercise-backend.herokuapp.com/products/add_to_cart/`, product, getConfig())
      .then(() => dispatch(getProductsCartThunk()))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)))
   }
}


export const deleteProductCartThunk = (id) =>{
   return dispatch => {
      dispatch(setIsLoading(true))
      axios.delete(`https://ecommerce-exercise-backend.herokuapp.com/cart/${id}/remove_item/`, getConfig())
      .then(() => dispatch(getProductsCartThunk()))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)))
   }
}

export const addBuyProductsThunk = (products) =>{
   return dispatch => {
      dispatch(setIsLoading(true))
      axios.post(`https://ecommerce-exercise-backend.herokuapp.com/cart/buy/`, products, getConfig())
      .then(() => dispatch(setCart([])))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)))
   }
}