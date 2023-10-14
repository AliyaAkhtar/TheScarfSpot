// import React, { useEffect, useState } from 'react';
// import './Cart.css';
// import { useCart } from '../CartContext';
// import { Link } from 'react-router-dom';

// const Cart = () => {
//   const { cart, removeFromCart, setCart } = useCart(); // Access cart and removeFromCart from context

//   // Function to handle removing an item from the cart
//   const handleRemoveFromCart = (productId) => {
//     removeFromCart(productId);
//   };
  
//   // Check if cart is undefined or empty
//   if (!cart || cart.length === 0) {
//     return (
//       <div className="cart-container">
//         <h2>Your Shopping Cart</h2>
//         <p>Your cart is empty.</p>
//       </div>
//     );
//   }

//   // Ensure that each product in the cart has an initial quantity of 1
//   useEffect(() => {
//     if (cart.some((item) => item.quantity === undefined)) {
//       const updatedCart = cart.map((item) => ({ ...item, quantity: 1 }));
//       setCart(updatedCart);
//     }
//   }, [cart, setCart]);
//    // Include cart and setCart in the dependency array


//   // Calculate the total price of items in the cart, considering item quantities
//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const handleQuantityChange = (productId, newQuantity) => {
//     // Ensure newQuantity is a positive integer
//     newQuantity = parseInt(newQuantity, 10);
//     if (isNaN(newQuantity) || newQuantity < 1) {
//       newQuantity = 1;
//     }
  
//     const updatedCart = cart.map((item) => {
//       if (item.id === productId) {
//         return { ...item, quantity: newQuantity };
//       }
//       return item;
//     });
  
//     setCart(updatedCart);
//   };
  

//   return (
//     <div className="cart-container">
//       <h2>Your Shopping Cart</h2>
//       <ul className="cart-items">
//         {cart.map((item) => (
//           <li key={item.id} className="cart-item">
//             <div className="cart-item-details">
//               <img src={item.image} alt={item.name} className="cart-item-image" />
//               <div>
//                 <p className="cart-item-name">{item.name}</p>
//                 <p className="cart-item-price">${item.price}</p>
//               </div>
//                 <input type="number" value={item.quantity} min="1" onChange={(e) => handleQuantityChange(item.id, e.target.value)}/>

//               <button type="button" onClick={() => handleRemoveFromCart(item.id)} className="remove-button">Remove</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <div className="cart-total">
//         <p >Total Price: ${total.toFixed(2)}</p>
//       </div>
//       <div className="proceed">
//       <Link to='/checkout' state={{ total: total.toFixed(2) }} >
//         Place Your Order
//       </Link>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from 'react';
import './Cart.css';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, setCart } = useCart(); // Access cart and removeFromCart from context

  // Ensure that each product in the cart has an initial quantity of 1
  useEffect(() => {
    if (cart.some((item) => item.quantity === undefined)) {
      const updatedCart = cart.map((item) => ({ ...item, quantity: 1 }));
      setCart(updatedCart);
    }
  }, [cart, setCart]); // Include cart and setCart in the dependency array

  // Function to handle removing an item from the cart
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  // Check if cart is undefined or empty
  if (!cart || cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Shopping Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  // Calculate the total price of items in the cart, considering item quantities
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantityChange = (productId, newQuantity) => {
    // Ensure newQuantity is a positive integer
    newQuantity = parseInt(newQuantity, 10);
    if (isNaN(newQuantity) || newQuantity < 1) {
      newQuantity = 1;
    }
  
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
  
    setCart(updatedCart);
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-details">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div>
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">${item.price}</p>
              </div>
                <input type="number" value={item.quantity} min="1" onChange={(e) => handleQuantityChange(item.id, e.target.value)}/>

              <button type="button" onClick={() => handleRemoveFromCart(item.id)} className="remove-button">Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <p >Total Price: ${total.toFixed(2)}</p>
      </div>
      <div className="proceed">
        <Link to='/checkout' state={{ total: total.toFixed(2) }} >
          Place Your Order
        </Link>
      </div>
    </div>
  );
};

export default Cart;
