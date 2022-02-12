import axios from 'axios';
import { getConfig } from '../../utils';
import { setIsLoading } from './appActions';
import {setProductList} from "./productActions"

export const categoryActions = {
   setCategories: " SET_CATEGORY"
}

export const setCategories = categories => ({
   type: categoryActions.setCategories,
   payload: categories
})


export const getCategoriesThunk = () =>{
   return dispatch => {
      dispatch(setIsLoading(true))
      dispatch(setCategories([]))
      axios.get(`https://ecommerce-exercise-backend.herokuapp.com/categories/`, getConfig())
      .then(res => dispatch(setCategories(res.data)))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)))
   }
}

export const getFilterCategoryThunk = (id) =>{
   return dispatch => {
      dispatch(setIsLoading(true))
      dispatch(setProductList([]))
      axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/?category=${id}`, getConfig())
      .then(res => dispatch(setProductList(res.data)))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)))
   }
}
