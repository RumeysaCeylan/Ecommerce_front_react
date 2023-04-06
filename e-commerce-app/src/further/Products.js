import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Products() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch.get(`http://localhost:8081/products/${categoryId}`)
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, [categoryId]);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <a href={`/product/${product.id}`}>{product.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

