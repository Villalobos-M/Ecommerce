import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductCartThunk, getProductsCartThunk, addBuyProductsThunk } from '../redux/actions/cartActions';
import { Link } from 'react-router-dom'
import "../styles/pages/cart.styles.css"


const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state=> state.cart.cart)

  useEffect(() => {
    dispatch(getProductsCartThunk())
  }, [dispatch]);

  const getIdDeleteProduct = id =>{
    dispatch(deleteProductCartThunk(id));
  }

  const buyProducts = cart =>{
    dispatch(addBuyProductsThunk(cart))
  }
  console.log(cart);

  const pricesCart = []
  for (let i = 0; i < cart.length; i++) {
    const priceProduct = (cart[i].product?.price);
    const quantityProduct = (cart[i].quantity);
    const subtotal = (priceProduct * quantityProduct)
    pricesCart.push(subtotal)
    
  }
    let subtotal = 0
      for (let j = 0; j < pricesCart.length; j++) {
      subtotal += pricesCart[j];
      }
    
  
  return (
    <div className='container-cart'>

      <h2 >SHOPPING CART</h2>

      <section className="row">
        <p className='p-product'>product</p>
        <p className='p-quantity'>quantity</p>
        <p className='p-price'>price</p>
      </section>
        <ul className='ul-cart'>
          {
            cart.map(cart => (
              <li key={cart.id}>
                <button onClick={() => getIdDeleteProduct(cart.id)}>
                  <i className="far fa-times-circle"></i>
                </button>

                <Link to={`/shop/${cart.product?.id}`}> 
                  <img src={cart.product?.images?.[0]?.url} alt={cart.product?.name} />
                  <p> {cart.product?.name} </p>
                </Link>

                <div className="cart-info">
                  <p>{cart.quantity}</p>
                  <p className='cart-price'>${(cart.product?.price)*(cart.quantity)}</p>
                </div>

              </li>
              )
            )
          }
        </ul>
        <section className="container-total">
          <h3>Subtotal: ${subtotal}</h3>
        </section>

        <section className="container-buy">
          <button  className='btn-checkout' onClick={() => buyProducts(cart)}>Checkout</button>
        </section>

    </div>
  );
};

export default Cart;
