import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css';
import { Badge, Box, Button, Card, CardContent, CardHeader, CardMedia, CircularProgress, IconButton, makeStyles ,} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import productImage from '../images/product2.jpg';
import { green, pink } from '@mui/material/colors';
;


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
    return <div> <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box></div>;
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
    
    <div style={{ height: 1000, width: 1500,backgroundColor:'whitesmoke' }}>
      <br></br>
      <Card style={{ height: 80, width: 150}}>
       <br></br>
        <Link to="/cartDetail/display">
            <IconButton aria-label="cart">
              <Badge badgeContent={4} color="success">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>       
        </Card>
        <Card  style={{ height: 400, width: 450,backgroundColor:'lightgray',  margin: 'auto' ,display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',boxShadow: '15px 15px 15px 10px gray' }}>
      <br></br>
        
        <CardContent>
        <CardHeader title={product.productName} > </CardHeader>

          <Typography variant="h6" component="p">
            Price: {product.salesPrice} TL
          </Typography>
    <br></br>
          <input type="number" value={salesQuantity} onChange={handleInputChange} />
          <br></br>
          
          <br></br>
          <Button variant="contained" color="success"  onClick={handleClick}>
            ADD TO CART
          </Button>
          <br></br><br></br>
          <Link to="/inventory">Back to Inventory</Link>
    <br></br>    <br></br>
    <br></br>

        </CardContent>
       
        </Card>
      
    </div>
  );
  


};

