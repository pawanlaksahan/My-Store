import React, { useState } from 'react';
import './Product.scss';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareIcon from '@mui/icons-material/Compare';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartReducer';


export const Product = () => {

  const images=[
    '/Images/merlot.jpg',
    '/Images/malbec.webp'
  ];

  const[Image,setImage]=useState(0);
  const[value,setValue]=useState(0);
  const dispatch = useDispatch()

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt='img1' onClick={(e)=>setImage(0)}/>
          <img src={images[1]} alt='img2' onClick={(e)=>setImage(1)}/>
        </div>
      </div>
      <div className="center">
        <img src={images[Image]} alt='imageMain'/>
      </div>
      <div className="right">
        <div className="header">
          <h2>Wine</h2>
        </div>
        <div className="price">
          <h2>Rs.2500</h2>
        </div>
        <div className="para">
          <p>Wine is an alcoholic drink typically made from fermented grapes.
             Yeast consumes the sugar in the grapes and converts it to ethanol and carbon dioxide, releasing heat in the process.
             Different varieties of grapes and strains of yeasts are major factors in different styles of wine.
             These differences result from the complex interactions between the biochemical development of the grape, the reactions involved in fermentation, the grape's growing environment (terroir), and the wine production process.
             Many countries enact legal appellations intended to define styles and qualities of wine. These typically restrict the geographical origin and permitted varieties of grapes, as well as other aspects of wine production.
             Wines can be made by fermentation of other fruit crops such as plum, cherry, pomegranate, blueberry, currant and elderberry.
          </p>
        </div>
        <div className="amount">
          <button className="decrease_increase" onClick={(e)=>{setValue(value===1?1:prev=>prev-1)}}>
          <RemoveIcon />
          </button>
          <div className="number">{value}</div>
          <button className="decrease_increase" onClick={(e)=>setValue(prev=>prev+1)}>
            <AddIcon />
          </button>
        </div>
        <button className="addToCart" onClick={()=>dispatch(addToCart({
           
        }))}>
          <div className="icon">
            <ShoppingCartIcon/>
          </div>
          <div className="text">
            Add To CArt
          </div>
        </button>

        <div className="actions">
        <div className="wishlist_compare">
          <div className="icon">
            <FavoriteBorderIcon/>
          </div>
          <div className="text">
            Add to wishlist
          </div>
        </div>

        <div className="wishlist_compare">
          <div className="icon">
            <CompareIcon/>
          </div>
          <div className="text">
            add to compare
          </div>
        </div>

        </div>
        
       
       <div className="text">
          Vendor : Polo
        </div>
        <div className="text">
          Product Type : Red Wine
        </div>
        <div className="text">
          Tag : Alcohol, Natural
        </div>
       
        

        <hr></hr>

        <div className="details">

        <div className="description">
          Description
        </div>
        <hr style={{marginTop:'10px',width:'200px',marginLeft:'0px'}}/> 
        <div className="description">
          Additional Information
        </div>
        <hr style={{marginTop:'10px',width:'200px',marginLeft:'0px'}}/> 
          <div className="description">
            FAq
          </div>

        </div>
       



      </div>
    </div>
  )
}
