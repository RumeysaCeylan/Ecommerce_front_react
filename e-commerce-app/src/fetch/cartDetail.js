import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const CartDetail = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [cartId, setCartId] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8081/cart/latest')
      .then((response) => response.json())
      .then((data) =>{
        console.log('data:', data);
        setCartId(data) } )
     
      .catch((error) => console.log(error));
  }, []);
  

  const fetchCartProducts = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8081/cart/cartProducts/${cartId}`);
      const jsonData = await response.json();
      setCartProducts(jsonData);
    } catch (error) {
      console.error('Error fetching cart products:', error);
    }
  }, [cartId]);
  

  useEffect(() => {
    if (cartId) {
      fetchCartProducts();
    }
  }, [cartId, fetchCartProducts]);
  console.log('cartProducts:', cartProducts);
  const fetchProductDetails = async (productId) => {
    try {
      const response = await fetch(`http://localhost:8081/product/${productId}`);
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  useEffect(() => {
    const fetchAllProductDetails = async () => {
      await fetchCartProducts();

      const allProductDetails = await Promise.all(
        cartProducts.map(async (product) => {
          const details = await fetchProductDetails(product.productId);
          return { ...details, salesQuantity: product.salesQuantity };
        })
      );

      setProductDetails(allProductDetails);
    };

    fetchAllProductDetails();
  }, [cartProducts, fetchCartProducts]);

  const grandTotal = productDetails.reduce(
    (total, product) => total + product.salesPrice * product.salesQuantity,
    0
  );

/*////////////////////////////////////////////////////*/

const removeProduct = async (productId) => {
  console.log('Removing product with ID:', productId);
  
  try {
    await fetch(`http://localhost:8081/cart/remove/${cartId}/${productId}`, {
      method: 'DELETE',
    });
    setProductDetails(productDetails.filter((product) => product.productId !== productId));
    setCartProducts(cartProducts.filter((product) => product.productId !== productId)); // Add this line

  } catch (error) {
    console.error('Error removing product:', error);
  }
};


/*********************************************************************************** */

  return (
    <div>
      <h2>Product Details</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Sales Price</th>
            <th>Sales Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {productDetails.map((item) => (
            <tr key={item.productId}>
              <td>{item.productId}</td>
              <td>{item.productName}</td>
              <td>{item.salesPrice}</td>
              <td>{item.salesQuantity}</td>
              <td>{item.salesPrice * item.salesQuantity}</td>
              <td>
              <button onClick={() => removeProduct(item.productId)}>&times;</button>


              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Grand Total: {grandTotal}</h3>
      <br/> <br/> <br/> 
      <Link to="/checkout">
        <button>Cart checkout</button>
        </Link>
    </div>
  );
};

export default CartDetail;
