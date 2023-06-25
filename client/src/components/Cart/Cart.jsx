import React from 'react';
import './Cart.scss';


export const Cart = () => {
    const data =[
        {
            id:1,
            img:'./Images/redWine.webp',
            img2:'./Images/redWine2.png',
            title:'red wine',
            desc:'Wine is an alcoholic drink typically made from fermented grapes.Yeast consumes the sugar in the grapes and converts it to ethanol and carbon dioxide, releasing heat in the process.Different varieties of grapes and strains of yeasts are major factors in different styles of wine.These differences result from the complex interactions between the biochemical development of the grape, the reactions involved in fermentation, the grapes growing environment (terroir), and the wine production process', 
            isNew:true,
            oldPrice:'Rs.3500',
            price:'Rs. 2500'
        },
        {
            id:2,
            img:'./Images/mintWine.jpeg',
            img2:'./Images/mintWine2.jpg',
            title:'mint wine',
            desc:'Wine is an alcoholic drink typically made from fermented grapes.Yeast consumes the sugar in the grapes and converts it to ethanol and carbon dioxide, releasing heat in the process.Different varieties of grapes and strains of yeasts are major factors in different styles of wine.These differences result from the complex interactions between the biochemical development of the grape, the reactions involved in fermentation, the grapes growing environment (terroir), and the wine production process', 
            isNew:true,
            oldPrice:'Rs.3500',
            price:'Rs. 2500'
        }
    ]
  return (
   
    <div className='cart'>
       <h1>Product in your cart</h1>
       {
         data.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt=''/>
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
        <button>Reset Cart</button>
       

    </div>
  )
}
