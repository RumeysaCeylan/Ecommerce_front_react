import { Button, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { blueGrey, pink } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';


const Checkout = () => {
  const [customerName, setCustomerName] = useState('');
  const [cardId, setCardId] = useState('');
  const [cartId, setCartId] = useState(null);
  const [setCheckoutSuccess] = useState(null);
  const [open, setOpen] = React.useState(false);

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
      const responseData = await response.json();

      // Check if the success property in the response is true
      if (responseData) {
        setCheckoutSuccess(true);
      } else {
        setCheckoutSuccess(false);
        console.error('Checkout failed:', responseData);
      }
      console.log(response);
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div style={{ height:1000, width:1500, backgroundColor:'whitesmoke'}}>
      <h2>Checkout</h2>
      <div style={{alignContent:'left'}}><Link to="/inventory"><HomeIcon sx={{ color: blueGrey[500],height:50, width:50 }} /></Link></div> 

     <div style={{backgroundColor:'lightyellow', height:400, width:400,   margin: 'auto' ,
    alignItems: 'center',
    justifyContent: 'center',boxShadow: '15px 15px 15px 10px gray'}}>
      <br></br><br></br>      <br></br><br></br>

     <label htmlFor="customerName">Customer Name: </label>
     
      <input
        type="text"
        id="customerName"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <br />      <br></br><br></br>

      <label htmlFor="cardId">Card ID: </label>
      <input
        type="text"
        id="cardId"
        value={cardId}
        onChange={(e) => setCardId(e.target.value)}
      />
      <br /> <br />      <br></br><br></br>

      <Button variant="contained" endIcon={<SendIcon />} onClick={handleCheckout} color='success'>
  Complete
</Button>
     </div>

<Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />


    </div>
  );
};

export default Checkout;
