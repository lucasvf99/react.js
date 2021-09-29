import React,{useState} from 'react';
import './ItemCount.css'
//External Components
import Button from '@mui/material/Button';


export default function ItemCount ( {stock,initial}) {
  
        const [items, setItem] = useState (0);
        const [disabledButton, setdisabledButton] = useState(false)
      
        const addClick = () => {
            if(items < stock){
                setItem (items + 1)
            }else{
                setdisabledButton(true) 
            }
                
            
        }
        
        const takeClick = () => {
          if(items>initial){
            setItem(items - 1)
 
          }
                setItem(items - 1)
            
            
        }
    return (

                <div className='caja_boton'>

                <Button variant="outlined" onClick={takeClick}   disabled={items <= initial}>-</Button>
             <p>   {items}</p>
             <Button variant="outlined" size="medium" onClick={addClick} disabled={items >= stock} >+</Button>
 
                </div>           
        
    );


}