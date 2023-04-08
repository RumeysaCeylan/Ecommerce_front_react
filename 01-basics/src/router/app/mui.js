import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)',boxShadow: "4px 4px black" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          React Kursu
        </Typography>
        <Typography variant="h5" component="div">
          go{bull} do{bull} ro{bull}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Java, Spring React JavaScript
        </Typography>
        <Typography variant="body2">
          
          <br />
          {'"BODY PART"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Öğren</Button>
      </CardActions>
    </Card>
    
  );
}