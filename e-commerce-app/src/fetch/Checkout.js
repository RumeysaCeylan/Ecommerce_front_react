import React, { useEffect, useState } from 'react';

const Checkout = () => {
  const [customerName, setCustomerName] = useState('');
  const [cardId, setCardId] = useState('');
  const [cartId, setCartId] = useState(null);
  const requestBody = {
    cartId: cartId,
    customerName: customerName,
    cardNumber: cardId
  };
 
  useEffect(() => {
    fetch('http://localhost:8081/cart/latest')
      .then((response) => response.json())
      .then((data) =>{
        console.log('data:', data);
        setCartId(data) } )
     
      .catch((error) => console.log(error));
  }, []);

  const handleCheckout = async () => {
  
  
    console.log('Sending request body:', requestBody);
  
    try {
        const response=await fetch('http://localhost:8081/cart/checkout', {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
      console.log(response);
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };
  
  return (
    <div>
      <h2>Checkout</h2>
      <label htmlFor="customerName">Customer Name: </label>
      <input
        type="text"
        id="customerName"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <br />
      <label htmlFor="cardId">Card ID: </label>
      <input
        type="text"
        id="cardId"
        value={cardId}
        onChange={(e) => setCardId(e.target.value)}
      />
      <br /> <br />
      <button type = "submit" onClick={handleCheckout}>Complete Checkout</button>
    </div>
  );
};

export default Checkout;
