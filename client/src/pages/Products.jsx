import React, { useState } from 'react'
import { List } from '../components/List/List';
import { useParams } from 'react-router-dom';
import './Products.scss'

export const Products = () => {

 const[filter,setFilter]=useState(0);
 const id= useParams;
 console.log(id)
 
   

  return (
    <div className="products">
      <div className="left">
        <div className="categories">
          <h2>Product Categories</h2>
          <div className="chk1">
          <input type='checkbox'/>
          <label >Local Wines</label>
          </div>
          <div className="chk2">
          <input type='checkbox'/>
          <label >Imported Wines</label>
          </div>
           
        </div>
        <div className="price">
           <h2>Filter by price</h2>
           <div className="range">
            <span>0</span>
            <input type='range' min={0} max={10000} onChange={(e)=>setFilter(e.target.value)}></input>
            <span>{filter}</span>
           </div>
        </div>
        <div className="sortBy">
          <h2>Sort by</h2>
          <div className="chk1">
            <input type='radio' id='1' value={1}/>
            <label htmlFor='1'>Price(Lowest first)</label>
          </div>
          <div className="chk2">
            <input type='radio' id='2' value={2}/>
            <label htmlFor='2'>Price(Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src='https://images.ctfassets.net/zpx0hfp3jryq/6MzWUx0dmizoxMMF7UoDGW/4b46703a372b4bc831dadb7126ca5848/5f89de02ed0598dcd06a5603_All-about-sweet-wine.jpg?fm=jpg&fl=progressive'/>
         <div className="items">
         <List className="list"/>
         </div>
         
      </div>
    </div>
  )
}
