//Compontents
import React from 'react';
import './Products.css';
import ItemCount from '../ItemCount/ItemCount';




 const Products =(props) => {
     const {title, price, description, cantidad, image} = props 
    return (
                <div className="conteiner_products">
                        <div className="caja_img_product">
                            <img src= {`./asset/products/${image}` } alt="imagen"/>
                        </div>
                        <div className="caja_p_product" >
                        <h3>{title}</h3>
                        <ul>
                            <li>{description}</li>
                            <li>Stock:{cantidad}</li>
                            <li>{price}</li>    
                            <li> <ItemCount stock={5} initial={1}/></li>  
                                       
                        </ul>
                            <button>Agregar al carrito</button>        
                        </div>
                        
                </div>
             
                
                
    )
  }


  export default Products ;