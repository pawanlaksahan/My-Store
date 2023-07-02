import React from 'react';
import './card.scss'
import { Link } from 'react-router-dom';

export const Card = ({value}) => {
  return (
    <Link className='link' to={`/product/${value.id}`}>
    <div className="card">
      <div className="image">
      <img className='mainImg' src={
        process.env.REACT_APP_UPLOAD_URL + value?.attributes.img.data.attributes.url
        } 
        alt='images'/>
      <img className='secondImg' src={
        process.env.REACT_APP_UPLOAD_URL + value?.attributes.img2.data.attributes.url
        } 
        alt='img2'/>

      </div>
      <h2>{value?.attributes.title}</h2>
      <div className="prices">
        <h3>${value?.attributes.oldPrice || value?.attributes.price + 1000}</h3>
        <h3>${value?.attributes.price}</h3>
      </div>
       
        
        
    </div>
    </Link>
  )
}
