import React,{useState} from 'react';
import Button from '@mui/material/Button';
import './ItemCount.css'

export default function ItemCount () {
        const [Items, setItem] = useState (0);
      
        const addClick = () => {
                setItem (Items + 1)
            
        }
        const takeClick = () => {
            setItem(Items - 1)
        }
    return (

                <div className='caja_boton'>
                           
           <Button variant="contained" size="medium" onClick={takeClick}>-</Button>
             <p>   {Items}</p>
             <Button variant="contained" size="medium" onClick={addClick}>+</Button>
 
                </div>           
        
    );


}