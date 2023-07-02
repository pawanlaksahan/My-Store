import React, { useEffect, useState } from 'react';
import './FeaturedProducts.scss';
import { Card } from '../Card/Card';
import 'axios';
import axios from 'axios';
 
 

export const FeaturedProducts = ({type}) => {

   const [data,setData]= useState([]);

   useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*",
          {
            headers: {
              Authorization : "bearer" + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data)
        console.log(data)

      }catch(err){
        console.log(err)
      }
    }
    fetchData();
   },[])



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
