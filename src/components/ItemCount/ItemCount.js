import React,{useState} from 'react';
import './ItemCount.css'
//External Components
import Button from '@mui/material/Button';


export default function ItemCount (props) {
  
        // const [items, setItem] = useState (0);
        // const [disabledButton, setdisabledButton] = useState(false)
      
        // const addClick = () => {
        //     if(items < stock){
        //         setItem (items + 1)
        //     }else{
        //         setdisabledButton(true) 
        //     }
                
            
        // }
        
        // const takeClick = () => {
        //   if(items>initial){
        //     setItem(items - 1)
 
        //   }
        //         setItem(items - 1)
            
            
        // }
    return (

                <div className='caja_boton'>

                <Button variant="outlined" onClick={props.onLess}   >-</Button>
                        <p>  {props.quantity}</p>
                 <Button variant="outlined" size="medium" onClick={props.onAdd}  >+</Button>
 
                </div>           
        
    );


}