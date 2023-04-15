import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { API_BASE_URL } from '../apiConfig';
import '../App.css';

export default function Products() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8081/products/${categoryId}`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, [products,categoryId]);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.categoryId}>
            <a href={`/inventory/productsComponent/${product.productId}`}>{product.productName}</a>  
          </li>
        ))}
      </ul>
    </div>
  );
}