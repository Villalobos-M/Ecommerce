import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardProductDetail from '../components/CardProductDetail';
import { addProductCartThunk } from '../redux/actions/cartActions';
import { getFilterCategoryThunk, getProductDetailThunk } from '../redux/actions';

import "../styles/pages/shopDetail.styles.css"

const ShopDetail = () => {
  const dispatch = useDispatch()
  const {id} = useParams()

  const productDetail = useSelector(state => state.product.productDetail)
  const productsList = useSelector(state => state.product.productsList)

  const [counter, setCounter] = useState(1)

  const addCart = () =>{
    const productCart ={
      product: id,
      quantity: counter
    }
    dispatch(addProductCartThunk(productCart))
  }

  useEffect(() => {
    dispatch(getProductDetailThunk(id))
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getFilterCategoryThunk(productDetail?.category?.id))
  }, [dispatch, productDetail]);

  return (
   <div className='bg-shop-detail-2'>

      <section className="product-detail">
      
        <article className="container-img">
          <h2>{productDetail.name}</h2>
          <img src={productDetail?.images?.[0]?.url} alt={productDetail.name} />
        </article>

        <article className="container-info-detail">
          
          <h2>{productDetail.name}</h2>
          <h3>${productDetail.price}</h3>
          <h4>Product characteristics</h4>
          <p>{productDetail.description}</p>

          <div className="container-counter">
            <h3>quantity:</h3>
            <div className="counter">
              <button onClick={() => setCounter(counter-1)}>-</button>
              <p>{counter}</p>
              <button onClick={() => setCounter(counter+1)}>+</button>
            </div>
            <button onClick={addCart} className='btn-add-cart'>
              Add to cart
            </button>
          </div>

        </article>
      </section>
      

      <article className="category-list">
        <h2>You might also like</h2>
        <ul className='ul-products-detail'>
          {
            productsList.map(product => <CardProductDetail 
                      key={product?.id} 
                      name={product?.name}
                      image={product?.images[0]?.url}
                      id={product?.id}
                      price={product?.price}
                  />)
          }
        </ul>
      </article>
   </div>
  );
};

export default ShopDetail;