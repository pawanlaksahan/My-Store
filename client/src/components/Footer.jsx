import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='PaymentMethods'>

        <div className="topic">
          <b>Payment Methods</b>
        </div>

        <div className="images">
        <img className='img' src='/Images/img1.jpg' alt='bank card'></img>
        <img className='img' src='/Images/img2.png' alt='bank card'></img>
        <img className='img' src='/Images/img3.png' alt='bank card'></img>
        <img className='img' src='/Images/img4.png' alt='bank card'></img>
        <img className='img' src='/Images/img5.jpg' alt='bank card'></img>
        </div>
        
      </div>
      <div className='details'>
        <h1>ALL RIGHT RESERVED</h1>
      </div>
      <div className='followUs'>
        <div className="text">
          <b>Follow Us</b>
        </div>
        <div className="social-media">
          <img className="img" src='./Images/fb.png' alt='img'></img>
          <img className="img" src='./Images/Insta.png.webp' alt='img'></img>
          <img className="img" src='./Images/twitter.png' alt='img'></img>
          <img className="img" src='./Images/Youtube.png' alt='img'></img>
             
        </div>
      </div>
    </div>
  )
}
