import React from 'react';
import './card.scss'
import { Link } from 'react-router-dom';

export const Card = ({value}) => {
  return (
    <Link className='link' to={`/product/${value.id}`}>
    <div className="card">
      <div className="image">
      <img className='mainImg' src={value.img} alt='images'/>
      <img className='secondImg' src={value.img2} alt='img2'/>

      </div>
      <h2>{value.title}</h2>
      <div className="prices">
        <h3>${value.oldPrice}</h3>
        <h3>${value.price}</h3>
      </div>
       
        
        
    </div>
    </Link>
  )
}
