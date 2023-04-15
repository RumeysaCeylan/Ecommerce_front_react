import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css';

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); 
  const [salesQuantity, setSalesQuantity] = useState(1);
  const [cartId, setCartId] = useState(null);

useEffect(() => {
  fetch('http://localhost:8081/cart/latest')
    .then((response) => response.json())
    .then((data) => setCartId(data))
    .catch((error) => console.log(error));
}, []);

  useEffect(() => {
    fetch(`http://localhost:8081/product/${productId}`)
    .then(response => response.json())
    .then(data => setProduct(data))
      .catch(error => console.log(error));
  }, [product,productId]);

  if (!product) {
    return <div>loading...</div>;
  }
  const handleInputChange = (event) => {
    setSalesQuantity(event.target.value);
  };
  const handleClick = async () => {
    
    const defaultCartProductId = 0;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({cartProductId:defaultCartProductId,salesQuantity: salesQuantity })
    };
  
    try {
      const response = await fetch(`http://localhost:8081/cart/add/${cartId}/${productId}`, requestOptions);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  
    
  return (
    <div>
      <h2>{product.productName}</h2>
      <p>Price: {product.salesPrice} TL</p>
      <input type="number" value={salesQuantity} onChange={handleInputChange} />
      <br/> <br/> <br/>
      <button onClick={handleClick}>Add to Cart</button>
      <br/> <br/> <br/> 
      <Link to="/cartDetail/display">
        <button>Cart Detail</button>
        </Link>
     
    </div>
  );


};

