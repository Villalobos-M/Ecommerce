import axios from 'axios'
import React from 'react'
import {useForm} from "react-hook-form"
import { Link } from 'react-router-dom'
import "../styles/pages/signup.styles.css"

const Signup = () => {
  const {register, handleSubmit, reset} = useForm();

  const defaultValues = {first_name: "", last_name: "", email: "", password: ""}

  const submit = data =>{
    console.log(data);
    axios.post("https://ecommerce-exercise-backend.herokuapp.com/users/", data)
         .then(res => console.log(res.data))
         .catch(res => console.log(res.response))
    reset(defaultValues)
  }

  return (
    <div className='bg-signup'>
      <article className="container-form">
    
        <div className="container-icon">
          <i className="fas fa-user-circle"></i>
        </div>

        <form action="" onSubmit={handleSubmit(submit)}>

          <div className="input-container-signup">
            <label htmlFor="firstName"></label>
            <i className="fas fa-user"></i>
            <input 
              type="text" 
              id="firstName"
              {...register("first_name")}
              required
              placeholder='First Name'
              />
        
            <label htmlFor="lastName"></label>
            <input 
              type="text" 
              id="lastName"
              {...register("last_name")}
              required
              placeholder='Last Name'
              />
          </div>

          <div className="input-container-signup">
            <label htmlFor="email"></label>
            <i className="fas fa-envelope"></i>
            <input 
              type="text" 
              id="email"
              {...register("email")}
              required
              placeholder='Email'
              
              />
          </div>

          <div className="input-container-signup">
            <label htmlFor="password"></label>
            <i className="fas fa-key"></i>
            <input 
              type="password" 
              id="password"
              {...register("password")}
              required
              placeholder='Password'
              />
          </div>

          <button className='btn-signup'>Sign up</button>
          <p>Already have an account? <Link to="/login">Sign in</Link></p>
          
        </form>

      </article>
    </div>
  )
}

export default Signup