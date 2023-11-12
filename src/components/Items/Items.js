import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Items.css';
import { Link } from 'react-router-dom';

const Items = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3001/home-products') // Use the correct URL
      .then((response) => {
        setProducts(response.data);
        //console.log(products[0].ImageFileName.data)
        // Buffer.from(result[0].Image.data).toString('base64')
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="container-2">
      <h2>Featured Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div className="product-lists">
        {products.map((product, index) => (
          <div className="products" key={index}>
            {product.ImageFileName && (
              <img src={`data:image/jpeg;base64,${product.ImageFileName}`} alt="" />
            )}
              <div className="products-details">
              <h3 className="products-title">{product['Product Name']}</h3>
              <p className="products-price">${product['Product Price']}</p>
            </div>
          </div>
        ))}
      </div>

      )}
      <div className="buttons">
        <Link to="/products" className="btns2">
          View More
        </Link>
      </div>
    </div>
  );
};

export default Items;
