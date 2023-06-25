import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import './Navbar.scss';
import { Cart } from './Cart/Cart';


export const Navbar = () => {
  const[open,setOpen]=useState(false);
  return (
    <div className='navbar'>
        <div className="wrapper">
         <div className="left">
             <div className="item">
                <img className="img-flag" src='/Images/flag.png' alt=''/>
                <ArrowDropDownIcon/>
             </div>
             <div className="item">
                <span className='span'>LKR</span>
                 <ArrowDropDownIcon/> 

             </div>
             <div className="item">
                <Link className="link" to={"/Products"}>Products</Link>

             </div>
             <div className="item">
                <Link className="link" to={"Product/2"}>Product</Link>
             </div>
             <div className="item">
             <Link className="link" to={"Product/3"}>Product</Link>
             </div>
             <div className="item">
             <Link className="link" to={"Product/4"}>Product</Link>
             </div>
             

         </div>

         <div className="center">
             <Link className="link" to={"/"}>S&S</Link>
         </div>

         <div className="right">
                  <div className="item">
                    Home
                  </div>
                  <div className="item">
                    About
                  </div>
                  <div className="item">
                    contact
                  </div>
                  <div className="item">
                    Stores
                  </div>
                  <div className="icons">
                  <SearchIcon/>
                  <PersonIcon />
                  <FavoriteBorderIcon/>
                   <div className="cart-item" onClick={()=>setOpen(!open)}>
                    <ShoppingCartIcon/>
                    <span>0</span>
                  </div>
                  </div>
                   
                  
         </div>
         </div>
          {open && <Cart/>}
    </div>
  )
}
