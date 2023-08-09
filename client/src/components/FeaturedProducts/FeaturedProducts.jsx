import React from 'react';
import './FeaturedProducts.scss';
import { Card } from '../Card/Card';
import useFetch from '../Hooks/useFetch';
 
 

export const FeaturedProducts = ({type}) => {


const{data,loading,error} = useFetch(
  `/products?populate=*&[filters][type][$eq]=${type}`,
)
 

  return (
    <div className='featuredProducts'>
      <div className="top">
         <h1>{type} products</h1>
         <p>These are the {type} wines in our store</p>
      </div>
      <br/>
      <div className="bottom">
         {error
         ? "something went wrong!"
         : loading
         ? "loading"
         :data?.map(value=>(
            <Card value={value} key={value.id}/>
         ))}
      </div>
      <br/>
    </div>
  )
}
