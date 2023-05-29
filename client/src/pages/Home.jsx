import React from 'react';
import './Home.scss'
import { Slider } from './Slider';
import { FeaturedProducts } from '../components/FeaturedProducts/FeaturedProducts';

export const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <br/>
      <br/>
      <FeaturedProducts type='featured'/>
      <br/>
      <br/>
      <FeaturedProducts type='trending'/>
      

    </div>
  )
}
