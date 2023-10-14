import React from 'react'
import './Footer.css'
import {FaTwitter} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <ul className='social-icons'>
            <li><a href='#'><FaTwitter/></a></li>
            <li><a href='#'><BsInstagram/></a></li>
            <li><a href='#'><FaFacebookF/></a></li>
            <li><a href='#'><FaLinkedinIn/></a></li>
        </ul>
        <ul className='menu'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Product</a></li>
          <li><a href='#'>Testimonials</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
        <p>CopyRight &copy; 2023 THESCARFSPOT | All Rights Reserved</p>
    </footer>
  )
}

export default Footer