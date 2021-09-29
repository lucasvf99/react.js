//Compontents
import React from 'react';
import './Products.css';
import ItemCount from '../ItemCount/ItemCount';




 const Products =(props) => {
    
    return (
                <div className="conteiner_products">
                        <div className="caja_img_product">
                            <img src= {`./asset/products/${props.image}` } alt="imagen"/>
                        </div>
                        <div className="caja_p_product" >
                        <h3>{props.title}</h3>
                        <ul>
                            <li>{props.description}</li>
                            <li>Stock:{props.cantidad}</li>
                            <li>{props.price}</li>    
                            <li> <ItemCount stock={5} initial={1}/></li>  
                                       
                        </ul>
                            <button>Agregar al carrito</button>        
                        </div>
                        
                </div>
             
                
                
    )
  }


  export default Products ;