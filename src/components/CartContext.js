import React, { createContext, useContext, useState } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Create a CartProvider component to wrap your entire app
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Define functions to add and remove items from the cart
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      // If the product is already in the cart, increase its quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }
  };

  // const removeFromCart = (productId) => {
  //   // Log the productId and current cart for debugging
  // console.log('Removing product with id:', productId);
  // console.log('Current cart:', cart);

  //   const indexOfItemToRemove = cart.findIndex((product) => product.id === productId);
  // console.log(indexOfItemToRemove);
  //   if (indexOfItemToRemove !== -1) {
  //     // Create a copy of the cart array
  //     const updatedCart = [...cart];
  
  //     // Remove one instance of the item at the specified index
  //     updatedCart.splice(indexOfItemToRemove, 1);

  //     // Log the updated cart before updating the state
  //   console.log('Updated cart:', updatedCart);
  
  //     // Update the cart state with the modified array
  //     setCart(updatedCart);
  //   }
  // };
  
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  // Function to handle clearing the cart
  const clearCart = () => {
    setCart([]); // Set the cart to an empty array
  };
  

  // Create a context value object to be passed to the provider
  const contextValue = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

// Create a custom hook to access the cart context
export function useCart() {
  return useContext(CartContext);
}
