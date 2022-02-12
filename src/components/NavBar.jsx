import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getFilterNameThunk } from '../redux/actions';
import "../styles/components/header.styles.css"

const NavBar = () => {
    const cart = useSelector(state=> state.cart.cart)

   const navigate = useNavigate()
     const dispatch = useDispatch();

   const [search, setSearch] = useState("");

   const handleCart = () =>{
    navigate("/cart")
  }

  const searchProduct = e =>{
    e.preventDefault()
    dispatch(getFilterNameThunk(search))
    navigate("/search")
    setSearch("")
  }

   const quiantityProduct = []
  for (let i = 0; i < cart.length; i++) {
    quiantityProduct.push(cart[i].quantity)  
  }

    let totalQuantity = 0
      for (let j = 0; j < quiantityProduct.length; j++) {
      totalQuantity += quiantityProduct[j];
      }
   
  return (
    <div>
      <div className="bg-header">
          <section className="container-header">
            <h1 onClick={() => navigate("/shop")}>Bizz</h1>

            <div className="container-btn-cart">
              <button className='btn-cart' onClick={handleCart}>
                <p>{totalQuantity}</p>
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </section>

          <section className="container-search">
            <form onSubmit={searchProduct}>
              <input 
                type="text" 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                placeholder='Search a article...'
                />
              <button><i className="fas fa-search"></i></button>
            </form>
            <div className="nav">
              <ul>
                <button onClick={() => navigate("/shop")}>
                  <h3>SHOP</h3>
                </button>
                <button onClick={() => navigate("/account")}>
                  <h3>ACCOUNT</h3>
                </button>
                <button onClick={() => navigate("/about")}>
                  <h3>ABOUT</h3>
                </button>
                
                
              </ul>
            </div>
          </section>
      </div>
    </div>
  )
}

export default NavBar