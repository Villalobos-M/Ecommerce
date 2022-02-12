import React from 'react'
import { Link } from 'react-router-dom';

import "../styles/components/footer.styles.css"

const Footer = () => {
  return (
    <div className='bg-footer'>
       <div className="first-footer">
         <h3>Lorem, ipsum dolor.</h3>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem dolore dolor ut quam facilis laudantium aspernatur deserunt. Consectetur, optio. Dolores perferendis nam quidem magni aliquam?</p>
       </div>
       <div className="second-footer">
         <p>Copyright ©2022</p>
         <ul className='ul-footer'>
            <li><Link to={"/shop"}> Shop</Link></li>
            <li><Link to={"/account"}> Account</Link></li>
            <li><Link to={"/about"}> About</Link></li>
            <li><Link to={"/cart"}> Cart</Link></li>
         </ul>
      </div>
       

    </div>
  )
}

export default Footer