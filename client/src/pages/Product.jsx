import React, { useState } from 'react';
import './Product.scss'

export const Product = () => {

  const images=[
    '/Images/merlot.jpg',
    '/Images/malbec.webp'
  ];

  const[Image,setImage]=useState(0);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt='img1' onClick={(e)=>setImage(0)}/>
          <img src={images[1]} alt='img2' onClick={(e)=>setImage(1)}/>
        </div>
      </div>
      <div className="center">
        <img src={images[Image]} alt='imageMain'/>
      </div>
      <div className="right">
        <div className="header">
          <h2>Wine</h2>
        </div>
        <div className="price">
          Rs.2500
        </div>
        <div className="para">
          <p>tretrtrltretrllrktrket;rrtretretretrt
            tretretrtretrtrtrtrtretretrrtretrtrt
            rtretretreetretretretretetrtretete
          </p>
        </div>
        <div className="amount">
          <div className="decrease"></div>
          <div className="number"></div>
          <div className="increase"></div>
        </div>
        <div className="addToCart">
          
        </div>

      </div>
    </div>
  )
}
