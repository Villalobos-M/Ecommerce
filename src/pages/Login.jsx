import React, {useState} from 'react';
import {useForm} from "react-hook-form"
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import "../styles/pages/login.styles.css"

const Login = () => {
   const {register, handleSubmit} = useForm()
   const navigate = useNavigate()
   const [loginError, setLoginError] = useState("");

   const submit = data =>{
      console.log(data);
      axios.post("https://ecommerce-exercise-backend.herokuapp.com/login/", data)
         .then(res => localStorage.setItem("token" ,res.data.access))
         .catch(() => setLoginError("Credenciales incorrectas"))
      navigate("/shop")
   }
  return (
   <div className='bg-login'>
      <div className="bg2-login">

         <div className="container-login">

            <h1>JOYERIA</h1>

            <article className="test">
               <h4>Test data</h4>
               <p><i className="far fa-user"></i>example@example.com</p>
               <p><i className="fas fa-key"></i>root</p>
            </article>

            <article className="container-form-login">
               <form onSubmit={handleSubmit(submit)}>
                  <div className="input-container">
                     <label htmlFor='email'>Enter your email</label>
                     <input 
                           {...register("email")}
                           type="email" 
                           id='email'
                           required
                        />
                  </div>
                  
                  <div className="input-container">
                     <label htmlFor='password'>Enter your password</label>
                     <input 
                           {...register("password")}
                           type="password" 
                           required
                           id='password'
                        />
                  </div>
                  <button className='btn-login'>Sign in</button>
               </form>
            </article>
            <div className="container-link">
               <Link to="/signup">Sing up</Link>
            </div>
         </div>
    </div>
     
      <h4>{loginError}</h4>
   </div>
  );
};

export default Login;