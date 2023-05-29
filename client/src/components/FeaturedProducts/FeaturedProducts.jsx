import React from 'react';
import './FeaturedProducts.scss';
import { Card } from '../Card/Card'
 
 

export const FeaturedProducts = ({type}) => {

  const data =[
    {
        id:1,
        img:'./Images/redWine.webp',
        img2:'./Images/redWine2.png',
        title:'red wine',
        isNew:true,
        oldPrice:'Rs.3500',
        price:'Rs. 2500'
    },
    {
        id:2,
        img:'./Images/mintWine.jpeg',
        img2:'./Images/mintWine2.jpg',
        title:'mint wine',
        isNew:true,
        oldPrice:'Rs.3500',
        price:'Rs. 2500'
    },
    {
        id:3,
        img:'./Images/CocoWine.jpg',
        img2:'./Images/cocoWine2.jpg',
        title:'coco wine',
        isNew:true,
        oldPrice:'Rs.3500',
        price:'Rs. 2500'
    },
    {
        id:4,
        img:'./Images/roseWine.jpg',
        img2:'./Images/roseWine2.jpg',
        title:'rose wine',
        isNew:true,
        oldPrice:'Rs.3500',
        price:'Rs. 2500'
    },
  ]

  return (
    <div className='featuredProducts'>
      <div className="top">
         <h1>{type} products</h1>
         <p>These are the {type} wines in our store</p>
      </div>
      <br/>
      <div className="bottom">
         {data.map(value=>(
            <Card value={value} key={value.id}/>
         ))}
      </div>
      <br/>
    </div>
  )
}
