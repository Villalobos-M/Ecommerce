import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/components/cardProductDetail.styles.css"

const CardProductDetail = ({name, image, id, price}) => {
  return (
      <div className='card-product-detail'>
         <Link className='link-detail' to={`/shop/${id}`}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>${price}</p>
         </Link>  
      </div>
   );
};

export default CardProductDetail;