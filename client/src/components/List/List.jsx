import React from 'react'
import { Card } from '../Card/Card';
import './List.scss'

export const List = () => {

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
        {
            id:5,
            img:'./Images/whiteWine.webp',
            img2:'./Images/whiteWine2.webp',
            title:'white Wine',
            isNew:true,
            oldPrice:'Rs.4500',
            price:'Rs. 3500'
        },
        {
            id:6,
            img:'./Images/SparklingWine.jpg',
            img2:'./Images/SparklingWine2.jpg',
            title:'Sparkling Wine',
            isNew:true,
            oldPrice:'Rs.5500',
            price:'Rs. 2500'
        },
        {
            id:7,
            img:'./Images/dessertWine.jpg',
            img2:'./Images/dessertWine2.webp',
            title:'dessert Wine',
            isNew:true,
            oldPrice:'Rs.4000',
            price:'Rs. 2500'
        },
        {
            id:8,
            img:'./Images/redWine.webp',
            img2:'./Images/redWine2.png',
            title:'red wine',
            isNew:true,
            oldPrice:'Rs.3500',
            price:'Rs. 2500'
        },

      ]

  return (
    <div className="list">
        {data.map(value=>(
            <Card value={value} key={value.id}/>
        ))}

           
        
    </div>
  )
}
