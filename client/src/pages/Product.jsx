import React from 'react'

export const Product = () => {

  const images=[
    '/Images/merlot.jpg',
    '/Images/malbec.webp'
  ]
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src='images[0]' alt='img1'/>
          <img src='images[1]'alt='img2'/>
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}
