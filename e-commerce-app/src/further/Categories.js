import React, { useState, useEffect } from 'react';
export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch.get('http://localhost:8081/categories')
      .then(response => {
        setCategories(response.data);
        console.log('Categories:', categories);
    })
      .catch(error => console.log(error));
  }, [categories]);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <a href={`/products/${category.id}`}>{category.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
