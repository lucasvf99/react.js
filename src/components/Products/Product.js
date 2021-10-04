//Compontents
import React from 'react';
import './Products.css';
import ItemCount from '../ItemCount/ItemCount';
//external Components
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



 const Products =(props) => {
    
    return (
                <div className="conteiner_products">
                        <div className="caja_img_product">
                            <img src= {`./asset/products/${props.img}` } alt="imagen"/>
                        </div>
                        <div className="caja_p_product" >
                        <h3>{props.title}</h3>
                        <ul>
                            <li>{props.description}</li>
                            <li>Stock:{props.cantidad}</li>
                            <li>{props.price}</li>    
                            <li> <ItemCount stock={5} initial={1}/></li>  
                                      
                        </ul>
                        <Button variant="outlined" href="#outlined-buttons">
                             Comprar
                              </Button>     
                              <Button variant="outlined" href="#outlined-buttons">
                                    <Link to={`/product/${props.id}`}>  Ver </Link>
                              </Button>     
                        </div>
                        
                        
                </div>
             
                
                
    )
  }


  export default Products ;