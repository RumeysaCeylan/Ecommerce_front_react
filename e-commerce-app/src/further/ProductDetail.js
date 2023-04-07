import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8081/product/${productId}`)
    .then(response => response.json())
    .then(data => setProduct(data))
      .catch(error => console.log(error));
  }, [product,productId]);

  if (!product) {
    return <div>Getirilemedi...</div>;
  }

  return (
    <div>
      <h2>{product.productName}</h2>
      <p>Price: {product.salesPrice} TL</p>
      
    </div>
  );
}

