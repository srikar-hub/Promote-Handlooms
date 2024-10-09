import React from 'react'
import './Hero.css'


import arrow_icon from '../Assests/arrow.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
     
    
        <div className="hero-hand-icon">
            <p>new</p>
        </div>
        <p>collections</p>
        <p>for everyone</p>
      
      <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
    
 </div>
        
  )
}

export default Hero