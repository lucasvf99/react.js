import React, { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'
//external Componets 
import Button from '@mui/material/Button';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const Cart = () => {
 
 const [showCart , setShowCart] = useState(false);

const handleCart = () =>{
    !showCart ? setShowCart(true) : setShowCart(false)
}

    return (
       <div>
        <Button onClick={handleCart}>
        <LocalGroceryStoreIcon/>
        </Button>
        <CartWidget show={showCart} close={handleCart}/>
       </div>
  )
}

export default Cart