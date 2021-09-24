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
          
                setItem(items - 1)
            
            
        }
    return (

                <div className='caja_boton'>
                           
           <Button variant="contained" size="medium" onClick={takeClick} >-</Button>
             <p>   {items}</p>
             <Button variant="contained" size="medium" onClick={addClick} disabled={disabledButton} >+</Button>
 
                </div>           
        
    );


}