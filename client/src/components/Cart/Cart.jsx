import React from 'react';
import './Cart.scss';
import { useSelector } from 'react-redux';


export const Cart = () => {
     const products = useSelector(state=>state.Cart.products)
  return (
   
    <div className='cart'>
       <h1>Products in your cart</h1>
       {
         products.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt='selectedImage'/>
                 <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <h2>1*{item.price}</h2>
                 </div>

            </div>
         ))
       }
       <div className="total">
        <span>SUBTOTAL</span>
        <span>Rs.2500</span>
       </div>
        <button>PROCEED TO CHECKOUT</button>
        <div className='reset'>Reset Cart</div>
       

    </div>
  )
}
