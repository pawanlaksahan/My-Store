import React, { useState } from 'react';
import './Slider.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Slider = () => {

  const Images=[
    './Images/coconutWine.jpg',
    './Images/grapesWine.jpg',
    './Images/mintWine.jpg',
    './Images/starFruitWine.jpg'

  ];

  const [currentImage,setCurrentImage]=useState(0);
  
  const  PrevImage =()=>{
    setCurrentImage(currentImage === 0 ? 3: (prev)=>prev-1);
  }

  const NextImage =()=>{
     setCurrentImage(currentImage === 3 ? 0: (prev)=>prev+1)
  }

  

   
  return (
    <div className='slider'>
      <div className="container" style={{transform:`translateX(-${currentImage *100}vw)`}}>
         <img className='img' src={Images[0]} alt='coconutWine'/>
         <img className='img' src={Images[1]}  alt='grapesWine'></img>
         <img className='img' src={Images[2]}  alt='mintWine'></img>
         <img className='img' src={Images[3]}  alt='starFruitWine'></img>
      </div>
      <div className="icons">
        <div className="icon" onClick={PrevImage}><ArrowBackIcon/></div>
        <div className="icon" onClick={NextImage}><ArrowForwardIcon/></div>
      </div>

    </div>
  )
}
