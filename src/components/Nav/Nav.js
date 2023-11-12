import React from 'react'
import './Nav.css'
import {FaTwitter} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai';
import { TfiShoppingCart } from 'react-icons/tfi';
import {CgSearch} from 'react-icons/cg'
import {FaBars} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const Nav = () => {
  return (
    <header>
        <input type='checkbox' name='' id='chk1'></input>
        <div className='logo'><h1>TheScarfSpot</h1></div>
        <ul>
            <li><Link to=''>Home</Link></li>
            <li><Link to='/products'>Product</Link></li>
            {/* <li><a href='#'>Testimonials</a></li> */}
            <li><a href='#footer'>Contact</a></li>
            <li>
                <Link to='/cart'><TfiShoppingCart/></Link>
                <a href='#'><AiOutlineHeart/></a>
                {/* <a href='#'><FaFacebookF/></a>
                <a href='#'><BsInstagram/></a>
                <a href='#'><FaTwitter/></a>
                <a href='#'><FaLinkedinIn/></a> */}
            </li>
        </ul>
        <div className='menu'>
            <label for='chk1'>
                <FaBars/>
            </label>
        </div>
    </header>
  )
}

export default Nav