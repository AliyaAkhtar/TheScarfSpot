import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Items.css';
import blue from '../../assets/blue.png';
import chiffon from '../../assets/chiffon.png';
import crinkle from '../../assets/crinkle.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Items = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/products') // Use the correct URL
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className='container-2'>
            <h2>Featured Products</h2>
            <div className="product-lists">
                {products.map((product) => (
                    <div className="products" key={product.id}>
                        <img src="" alt="" />
                        <div className='products-details'>
                            <h3 className="products-title">{product['Product Name']}</h3>
                            <p className="products-price">${product['Product Price']}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='buttons'>
                <Link to="/products" className='btns2'>View More</Link>
            </div>
        </div>

        // <div className='container-2'>
        //     <h2>Featured Products</h2>
        //     <div className="product-lists">
        //         <div className="products">
        //             <img src={blue} alt="" />
        //             <div className='products-details'>
        //                 <h3 className="products-title">Fancy Scarf</h3>
        //                 <p className="products-price">$100.00</p>
        //             </div>
        //         </div>

        //         <div className="products">
        //             <img src={crinkle} alt="" />
        //             <div className='products-details'>
        //                 <h3 className="products-title">Fancy Scarf</h3>
        //                 <p className="products-price">$100.00</p>
        //             </div>
        //         </div>

        //         <div className="products">
        //             <img src={chiffon} alt="" />
        //             <div className='products-details'>
        //                 <h3 className="products-title">Fancy Scarf</h3>
        //                 <p className="products-price">$100.00</p>
        //             </div>
        //         </div>
        //     </div>
        //         <div className='buttons'>
        //             <Link to="/products" className='btns2'>View More</Link>
        //         </div>
        // </div>
    )
}

export default Items