import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../apiConfig';
import '../App.css';

export default function Categories() {
  const [categories, setCategories] = useState([]);


useEffect(() => {
    fetch(`${API_BASE_URL}/categories`)
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
    <h2>Categories</h2>
    <ul>
      {categories.map(category => (
        <li key={category.categoryId}>
          <a href={`/products/${category.categoryId}`}>{category.categoryName}</a>
        </li>
      ))}
    </ul>
  </div>
  );
}
