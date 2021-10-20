//Compontents
import React,{useContext,useState} from 'react';
import './Products.css';
import ItemCount from '../ItemCount/ItemCount';
//external Components
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
//Context
import CartContext from '../../Context/CartContext';


 const Products =({products}) => {


    const [count, setCount] = useState (0);
    
 const onAdd = () => {
    if(count< products.cantidad){
        setCount(count +1)
    }
    }
    const onLess = () =>{
      if(count >  0){
        setCount(count - 1)
      }
    };

    const {addProducts,clear,removeOneItem} = useContext(CartContext);

    const handleOnAdd = ( ) => addProducts(products,count);
    const removerUnItem = ( ) => removeOneItem(products,count);

    return (
                <div className="conteiner_products" key={products.id}>
                        <div className="caja_img_product">
                            <img src= {`/asset/products/${products.img}` }/>
                        </div>
                        <div className="caja_p_product" >
                        <h2>{products.title}</h2>
                        <ul>
                            <li>{products.description}</li>
                            <li>Stock:{products.cantidad}</li>
                            <li>${products.price}</li>    
                            <ItemCount onAdd={onAdd} onLess={onLess} quantity={count} />
                                      
                        </ul>
                            <div className="conteiner-button">
                            <Button variant="outlined" href="#outlined-buttons" onClick={handleOnAdd}>
                                Comprar
                             </Button>     
                             <Button variant="outlined" href="#outlined-buttons">
                               <Link to={`/product/${products.myId}`}> Ver </Link>
                             </Button>
                              <Button variant="outlined" href="#outlined-buttons" onClick={removerUnItem}>
                                   Eliminar un Item
                              </Button>         
                            </div>  
                        </div>
                        
                        
                </div>
             
                
                
    )
  }


  export default Products ;