import React from 'react'
import './About.css'
import pic from '../../assets/about.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about-imag'>
        <img src={pic}></img>
      </div>
      <div className='about-content'>
        <h2>About Us</h2>
        <p>At TheScarfSpot, we're passionate about scarves. Our scarves are crafted with unwavering commitment to quality, blending exquisite materials, timeless designs, and expert artisanship. We believe that your scarf should reflect your unique style, which is why we offer a diverse range from classic to contemporary. </p>
        <div className='btn-1'>
          <a href='#'>Contact Us</a>
        </div>
      </div>  
    </div>
  )
}

export default About