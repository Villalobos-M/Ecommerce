import React, { useEffect } from 'react';
import CardProduct from '../components/CardProduct';
import {useDispatch, useSelector} from 'react-redux'
import { getProductsThunk, getCategoriesThunk, getFilterCategoryThunk } from "../redux/actions"

import "../styles/pages/shop.styles.css"

const Shop = () => {
  const productsList = useSelector(state => state.product.productsList)
  const categories = useSelector(state => state.category.categories)
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk())
    dispatch(getCategoriesThunk())
  }, [dispatch]);


  const filterCategory = id =>{
    dispatch(getFilterCategoryThunk(id))
    
  }

  const allProducts = () =>{
    dispatch(getProductsThunk())
  }

  return (
   <div className='bg-shop'>

    
      <section className="container-type">
        {
          categories?.map(categorie => 
            <button  className='btn-type' onClick={() => filterCategory(categorie.id)}
            key={categorie?.id}>{categorie?.name}
            </button>)
        }
        <button 
        onClick={allProducts}
        className='btn-all btn-type'
        >All</button>

      </section>

      <ul className='ul-prod'>
        {
          productsList.map(product => 
                  <CardProduct 
                      key={product?.id} 
                      name={product?.name}
                      image={product?.images[0]?.url}
                      id={product?.id}
                      price={product?.price}
                  />)
        }
      </ul>
   </div>
  );
};

export default Shop;