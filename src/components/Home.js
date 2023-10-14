import React from 'react';
import Nav from './Nav/Nav'
import Title from './Title/Title';
import About from './About/About';
import Items from './Items/Items';
import Footer from '../components/Footer/Footer'


const Home = () => {
  return (
    <>
    {/* <Nav/> */}
    <Title/>
    <About/>
    <Items/>
    {/* <Footer/> */}
    </>
  )
}

export default Home