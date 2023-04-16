import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../apiConfig';
import '../App.css';
import { Link } from 'react-router-dom';
import { blueGrey, pink } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia, Grid } from '@mui/material';
import categoryImage1 from '../images/product.jpg';

export default function Categories() {
  const [categories, setCategories] = useState([]);


useEffect(() => {
    fetch(`${API_BASE_URL}/categories`)
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error));
  }, []);
  const categoryImages = categoryImage1;

  return (
    <div style={{height:1000, width:1500, backgroundColor:'snow'}}>
      <h2>Categories</h2>
      <div style={{alignContent:'left'}}><Link to="/inventory"><HomeIcon sx={{ color: blueGrey[500],height:50, width:50 }} /></Link></div> 

      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.categoryId}>
            <Card sx={{ backgroundColor: 'lightsteelblue' ,boxShadow: '15px 15px 15px 5px lightblue' }}>
            <CardMedia component="img" height="140" src={categoryImages} alt={category.categoryName} />

              <CardActionArea component={Link} to={`/inventory/categoriesComponent/${category.categoryId}`}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {category.categoryName}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
  
  
}
//            <CardMedia component="img" height="140" image={category.categoryImage} alt={category.categoryName} />
