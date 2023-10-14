import React from 'react'
import './AllProducts.css'
import blue from '../../assets/blue.png';
import chiffon from '../../assets/chiffon.png';
import crinkle from '../../assets/crinkle.png';
import red from '../../assets/red.png';
import summer from '../../assets/summer.png';
import western from '../../assets/western.png';
import shawl from '../../assets/shawl.png';
import green from '../../assets/green.png';
import huishi from '../../assets/Huishi.png';
import scarf from '../../assets/scarf.png';
import fancy from '../../assets/fancy.png';
import { AiOutlineHeart } from 'react-icons/ai';
import { TfiShoppingCart } from 'react-icons/tfi';
import {useState} from 'react';
import { useCart } from '../CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const AllProducts = () => {

  const { cart, addToCart} = useCart();    //Access cart and addToCart function from context

  const [confirmationMessage, setConfirmationMessage] = useState('');
  // const [cart, setCart] = useState([]); // Initialize an empty cart
  const [wishlist, setWishlist] = useState([]); // Initialize an empty wishlist

  const products = [
    { id: 1, name: 'Fancy Scarf', price: 100.00, image: blue },
    { id: 2, name: 'Chiffon Scarf', price: 100.00, image: chiffon},
    { id: 3, name: 'Casual Scarf', price: 80.00, image: crinkle },
    { id: 4, name: 'Scarf', price: 80.00, image: red },
    { id: 5, name: 'Shawl', price: 80.00, image: shawl },
    { id: 6, name: 'Casual Scarf', price: 80.00, image: western },
    { id: 7, name: 'Summer Scarf', price: 80.00, image: summer },
    { id: 8, name: 'Fancy Scarf', price: 100.00, image: green },
    { id: 9, name: 'Fancy Scarf', price: 100.00, image: fancy },
    { id: 10, name: 'Fancy Scarf', price: 100.00, image: huishi },
    { id: 11, name: 'Scarf', price: 80.00, image: scarf },
    // ...other product data
  ];

   // Function to add a product to the cart
   const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    if (cart.some((item) => item.id === product.id)) {
      // Product is already in the cart
      toast.warning('Product already in cart');
    } else {
      // Add the product to the cart and display a success toast
      addToCart(product);
      toast.success('Product added to the cart');
    }
  };
  

  // Function to add a product to the wishlist
  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    setConfirmationMessage('Product added to the wishlist');
  
    setTimeout(() => {
      setConfirmationMessage('');
    }, 3000);
  };

  return (
    <div id="products">
      <div className="container-1">
        <h1 className="sub-title">ALL PRODUCTS</h1>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnHover />
        <div className="product-list">
          {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="layer">
              <div className='icons'>
                <button type='button' className='btn-icon' title='Add to Wishlist' onClick={() => addToWishlist(product)}><AiOutlineHeart className='icon'/></button>
                <button type='button' className='btn-icon' title='Add to Cart' onClick={() => handleAddToCart(product)}><TfiShoppingCart className='icon'/></button>
              </div>
            </div>  
            <div className='product-details'>
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">${product.price}</p>
            </div> 
          </div>
          ))}
        </div>
      </div>

    </div>  
  )
}       

export default AllProducts