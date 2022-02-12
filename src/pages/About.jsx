import React, { useState } from 'react'
import "../styles/pages/about.styles.css"

const About = () => {

  const [email, setEmail] = useState("")

  const submit= (e) =>{
    e.preventDefault()
    setEmail("")
  }
  return (
    <div className='container-about'>
      <h2>JAWERLY BIZZ</h2>
      <section className="container-info-about">
        <div className='img-about'></div>
        <div className="information-about">
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perspiciatis numquam quaerat, dolorem voluptatem enim error sed natus, possimus quibusdam vero eum saepe rem hic veniam inventore distinctio corrupti harum.</p>
          <ul>
            <li>Sit amet consectetur adipisicing elit. Esse consequatur fuga omnis illum autem blanditiis placeat. Accusantium voluptatum quam odit eaque!</li>
            <li>Esse consequatur fuga omnis illum autem blanditiis placeat. Ea quam odit eaque!</li>
            <li> fuga omnis illum autem blanditiis placeat. Accusantium voluptatum quam odit Lorem ipsum dolor sit amet. eaque!</li>
          </ul>
        </div>
      </section>

      <section className="social-reds">
         <a href="https://www.instagram.com/?hl=es-la" target={"_blank"} rel="noreferrer"> <i className="fab fa-instagram" ></i></a> 
          <a href="https://twitter.com/i/flow/login" target={"_blank"} rel="noreferrer"> <i className="fab fa-twitter"></i></a> 
         <a href="https://es-la.facebook.com/" target={"_blank"} rel="noreferrer"> <i className="fab fa-facebook"></i></a> 
         <a href="https://web.whatsapp.com/" target={"_blank"} rel="noreferrer"> <i className="fab fa-whatsapp"></i></a> 
        
      </section>
      <p>Sign up to receive news and updates</p>

    <section className="container-input-about">
      <form className='form-about' onSubmit={submit}>
        <input 
          type="email"
          placeholder='Email Adress' 
          required
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <button className='btn-about-signup'> Sign Up</button>
      </form>
        
    </section>

    </div>
  )
}
export default About;