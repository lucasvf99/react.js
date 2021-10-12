import React from 'react';
import './ItemCount.css'
//External Components
import Button from '@mui/material/Button';


export default function ItemCount (props) {
  
    
    return (

                <div className='caja_boton'>

                <Button variant="outlined" onClick={props.onLess}   >-</Button>
                        <p>  {props.quantity}</p>
                 <Button variant="outlined" size="medium" onClick={props.onAdd}  >+</Button>
 
                </div>           
        
    );


}