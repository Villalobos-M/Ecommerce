import axios from 'axios';
import { setIsLoading } from './appActions';
import { getConfig } from '../../utils';

export const ordersActions = {
   setOrders: "SET_ORDERS"
}

export const setOrders = orders => ({
   type: ordersActions.setOrders,
   payload: orders
})

export const getOrdersThunk = () =>{
   return dispatch => {
      dispatch(setIsLoading(true))
      axios.get(`https://ecommerce-exercise-backend.herokuapp.com/orders/`, getConfig())
      .then(res => dispatch(setOrders(res.data)))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)))
   }
}