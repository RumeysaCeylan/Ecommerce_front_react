import { Button, Tooltip } from '@mui/material';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import {  blueGrey, orange, pink } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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
    <h2>Cart Details</h2>
    <div style={{alignContent:'left'}}><Link to="/inventory"><HomeIcon sx={{ color: blueGrey[500],height:50, width:50 }} /></Link></div> 


    <TableContainer component={Paper} sx={{ backgroundColor: orange[50] }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Product ID</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Sales Price</TableCell>
            <TableCell>Sales Quantity</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productDetails.map((item) => (
            <TableRow key={item.productId}>
              <TableCell>{item.productId}</TableCell>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.salesPrice}</TableCell>
              <TableCell>{item.salesQuantity}</TableCell>
              <TableCell>{item.salesPrice * item.salesQuantity}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => removeProduct(item.productId)}
                  color="error"
                >
                  &times;
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h3>Grand Total: {grandTotal}</h3>
    <br />
    <br />
    <br />
    <Link to="/checkout">
    <Tooltip title="approve cart" sx={{ backgroundColor: orange[200],color:'rebeccapurple' }}>
      <Button>Checkout</Button>
    </Tooltip>
    </Link>
  </div>
);

};

export default CartDetail;
//<button onClick={() => removeProduct(item.productId)}>&times;</button>
