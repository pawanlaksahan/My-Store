import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='PaymentMethods'>

        <div className="topic">
           Payment Methods 
        </div>

        <div className="images">
        <img className='img' src='/Images/img1.jpg' alt='bank card'></img>
        <img className='img' src='/Images/img2.png' alt='bank card'></img>
        <img className='img' src='/Images/img3.png' alt='bank card'></img>
        <img className='img' src='/Images/img4.png' alt='bank card'></img>
        <img className='img' src='/Images/img5.jpg' alt='bank card'></img>
        </div>
        
      </div>
      {/* <div className='details'>
        <h1>ALL RIGHT RESERVED</h1>
      </div> */}
      <div className='followUs'>
        <div className="text">
          Follow Us
        </div>
        <div className="social-media">
          <img className="img" src='/Images/fb.png' alt='img'></img>
          <img className="img" src='/Images/Insta.png.webp' alt='img'></img>
          <img className="img" src='/Images/twitter.png' alt='img'></img>
          <img className="img" src='/Images/Youtube.png' alt='img'></img>
             
        </div>
      </div>
      <div className="customCare">
            <div className="header">Custom Care</div>
           <ul>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Corporate & Bulk Purchasing</li>
            <li>Returns & Refunds</li>
            <li>Contact Us</li>
           </ul>
      </div>
      <div className="customCare">
        <div className="header">S&S</div>
        <ul>
            <li>About S&S</li>
            <li>S&S Stores</li>
            <li>S&S Donates</li>
            
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  )
}
