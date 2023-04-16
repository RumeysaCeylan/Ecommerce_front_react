import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import '../App.css';
import { blueGrey, pink } from '@mui/material/colors';
import { Typography } from '@mui/material';
import { Card, CardContent, CardMedia, Grid } from '@mui/material';
import productImage from '../images/product2.jpg';

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
    
   <div style={{height:1000, width:1500, backgroundColor:'lightpink'}}>
    <br></br>
    <div style={{alignContent:'left'}}><Link to="/inventory"><HomeIcon sx={{ color: blueGrey[500],height:50, width:50 }} /></Link></div> 
    <br></br><br></br>
     <Grid container spacing={2}>
      <br></br>
    {products.map((product) => (
      <Grid item xs={12} md={4} key={product.productId}>
       
        <Card style={{ height: 400, width: 450,backgroundColor:'whitesmoke',boxShadow: '15px 15px 15px 10px darkred'  }}>
          <CardMedia
            component="img"
            height="200"
            width="100"
            image={productImage}
            alt="Product Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="h6" color="darkgreen">
              Price: {product.salesPrice} TL
            </Typography>
          </CardContent>
          <Link to={`/inventory/productsComponent/${product.productId}`}>
            <Typography variant="subtitle2" align="center" color="gray">
              Details
            </Typography>
          </Link>
        </Card>
      </Grid>
    ))}
  </Grid>
   </div>
);
} 
