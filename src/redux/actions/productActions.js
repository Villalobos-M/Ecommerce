import axios from 'axios';
import { setIsLoading } from './appActions';
import { getConfig } from '../../utils';

export const productActions = {
   setProductList: "SET_PRODUCT_LIST",
   setProductDetail: "SET_PRODUCT_DETAIL",
}

export const setProductList  = products => ({
   type: productActions.setProductList,
   payload: products
});

export const setProductDetail = product => ({
   type: productActions.setProductDetail,
   payload: product
})


export const getProductsThunk = () =>{
   return dispatch => {
      dispatch(setIsLoading(true))
      dispatch(setProductList([]))
      axios.get("https://ecommerce-exercise-backend.herokuapp.com/products/", getConfig())
      .then(res => dispatch(setProductList(res.data)))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)))
   }
}

export const getProductDetailThunk = (id) =>{
   return dispatch => {
      dispatch(setIsLoading(true))
      dispatch(setProductDetail({}))
      axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/${id}/`, getConfig())
      .then(res => dispatch(setProductDetail(res.data)))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)))
   }
}


export const getFilterNameThunk = (name) =>{
   return dispatch => {
      dispatch(setIsLoading(true))
      dispatch(setProductList([]))
      axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/?name__icontains=${name}`, getConfig())
      .then(res => dispatch(setProductList(res.data)))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)))
   }
}
