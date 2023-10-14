import React, { useState } from 'react';
import './CheckoutPage.css'; // Apply CSS styles as needed
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext'; // Import your cart context

const CheckoutPage = () => {

    const location = useLocation();
const total = location.state && location.state.total ? parseFloat(location.state.total) : 0; // Ensure total is a valid number

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  let navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Here, you can make an API request to submit the order details
    // and the total price to your backend for processing

    // After successfully placing the order, set isOrderPlaced to true
    setIsOrderPlaced(true);
  };

  const { clearCart } = useCart(); // Replace useCart with your actual cart context

  const handleReturnToCart = () => {
    clearCart(); // Clear the cart
    navigate('/'); // Redirect back to the cart page
  };


  if (isOrderPlaced) {
    return (
      <div className="order-confirmation">
        <h2 className='order'>Order Placed Successfully!</h2>
        <p>Thank you for your order.</p>
        <button onClick={handleReturnToCart} className='return'>Return to Home</button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2 className='checkout'>Place Your Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="total-price">
          <p>Total Price: ${total.toFixed(2)}</p>
        </div>
        <button className='submit'>Confirm Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
