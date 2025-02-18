import React from 'react';
import ViewButton from './button.jsx';

export default function Productcard() {
  const productImage = 'https://via.placeholder.com/300x200';
  const productName = 'Sample Product';
  const price = '$99.99';

  return (
    <div className="card">
      <img src={productImage} alt="Product" className="logo" />
      <div className="read-the-docs">
        <h2>{productName}</h2>
        <p>Price: {price}</p>
        <ViewButton />
      </div>
    </div>
  );
}
