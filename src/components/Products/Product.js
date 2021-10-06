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
                            <img src= {`/asset/products/${props.img}` } alt="imagen"/>
                        </div>
                        <div className="caja_p_product" >
                        <h2>{props.title}</h2>
                        <ul>
                            <li>{props.description}</li>
                            <li>Stock:{props.cantidad}</li>
                            <li>{props.price}</li>    
                        
                                      
                        </ul>
                            <div className="conteiner-button">
                            <Button variant="outlined" href="#outlined-buttons">
                                Comprar
                             </Button>     
                              <Button variant="outlined" href="#outlined-buttons">
                                    <Link to={`/product/${props.id}`}>  Ver </Link>
                              </Button>       
                            </div>  
                        </div>
                        
                        
                </div>
             
                
                
    )
  }


  export default Products ;