import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersThunk } from '../redux/actions';
import { getConfig } from '../utils'
import "../styles/pages/account.styles.css"
import "../styles/pages/orders.styles.css"
import { useNavigate } from 'react-router-dom';

const Account = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const orders = useSelector(state=> state.orders.orders)

  const [user, setUser] = useState({})

   useEffect(() => {
     axios.get("https://ecommerce-exercise-backend.herokuapp.com/users/myself/", getConfig())
     .then(res => setUser(res.data))
   }, [])
   

  useEffect(() => {
    dispatch(getOrdersThunk())
  }, [dispatch])

  const getOut = () =>{
    localStorage.setItem("token", "")
    navigate("/login")
  }
   
  return (
    <div className='container-account' >

      <article className="container-info-user">
        <div className="container-name">
          <div className='container-info' >
          <h3>Name: </h3>
          <p>{user.first_name}</p>
          <p>{user.last_name}</p>
        </div>

        <div className='container-info' >
          <h3>Email: </h3>
          <p>{user.email}</p>
        </div>
        </div>
        

        <div className='container-info' >
          <h3>Products in the Cart: </h3>
            <p>{user.cart?.length}</p>
        </div>
        <div className="container-btn-getout">
        <button onClick={getOut}>Sign out</button>
      </div>

        <div className='container-info' >
          <h3>Orders: </h3>
            <p>{user.orders?.length}</p>
        </div>
      </article>

      

      <div className='container-orders'>   
        <ul>
          {
            orders.map(product => (
              <li key={product.id}> 
                <img src={product.product?.images[0]?.url} alt={product.name}/>
                <h2> {product.product.name}</h2>
                <h4>Date: {product.purchase_date.slice(0, 10) }</h4>
                <h4>Time: {product.purchase_date.slice(11, 19) }</h4>
                <div className="container-price">
                  <p>Quantity: {product.quantity}</p>
                  <p>Price: ${(product.product.price)*(product.quantity)}</p>
                </div>
              </li>))
          }
        </ul>
      </div>

    </div>
  )
}

export default Account