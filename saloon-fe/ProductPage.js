// ProductPage.js
// This page will be inside src file.

import React from 'react';
import Product from './Product';

const products = [
  // Your product data here
];

function ProductPage() {
  return (
    <div className="product-page">
      <h1>Our Products</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductPage;
