import './App.css';
import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Home';
import Products from './components/Product';
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { CartProvider } from './components/CartContext'; // Import the CartProvider
import CheckoutPage from './components/CheckoutPage/CheckoutPage';

function App() {
  return (
    <>
      <Router>
      <CartProvider> {/* Wrap your app with the CartProvider */}
      <Nav/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        {/* <Route path="/footer" element={<Footer/>}/> */}
      </Routes>
      <Footer/>
      </CartProvider>
    </Router>
    </>
  );
}

export default App;
