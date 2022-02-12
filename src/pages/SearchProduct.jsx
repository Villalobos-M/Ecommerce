import React from 'react';
import { useSelector } from 'react-redux';
import CardProduct from '../components/CardProduct';

export const SearchProduct = () => {

  const productsList = useSelector(state => state.product.productsList)
  return (
      <div className='container-product-search'>

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
