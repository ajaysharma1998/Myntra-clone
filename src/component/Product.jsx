// src/ProductList.js

import React, { useEffect, useState } from 'react';
import './Product.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const apiUrl = "https://flipkart-backend-wgri.onrender.com/data";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);

        // Map through each product and parse necessary fields
        const parsedProducts = data.map(product => {
          const parsedCategoryTree = JSON.parse(product.product_category_tree);
          const parsedImageArray = JSON.parse(product.image);

          return {
            ...product,
            product_category_tree: parsedCategoryTree,
            image: parsedImageArray[0] // Only use the first image
          };
        });

        setProducts(parsedProducts);
      } catch (error) {
        console.error('Error fetching or parsing product data:', error);
        setError('Error fetching or parsing product data');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-container">
          <h1 className="product-title">{product.product_name}</h1>
          <p className="product-category">{product.product_category_tree.join(' > ')}</p>
          <p className="product-price">Retail Price: ₹{product.retail_price}</p>
          <p className="product-discounted-price">Discounted Price: ₹{product.discounted_price}</p>
          {/* <p className="product-description">{product.description}</p> */}
          <div className="product-images">
            <img src={product.image} alt={`${product.product_name}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
