import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/components/cardProduct.styles.css"

const CardProduct = ({name, image, id, price}) => {
  return (
      <div className='card-product'>
         <Link className='link' to={`/shop/${id}`}>
            <section className="container-img-card">
               <img src={image} alt={name} />
            </section>
            
            <section className="info-prod">
               <h3>{name}</h3>
               <p>${price}</p>
            </section>
         </Link>  
      </div>
   );
};

export default CardProduct;
