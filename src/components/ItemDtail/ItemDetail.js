import { useState, useEffect, useContext } from "react"
import ItemListConterner from '../ItemListConteiner/ItemListConteiner'
import ProductDetail from "../ProductDetail/ProductDetail";
import { Link } from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import CartWidget from "../CartWidget/CartWidget";
//Context
import CartContext from '../../Context/CartContext'

//external components
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Button from '@mui/material/Button';


export default function ItemDetail ({products}){

const [count, setCount] = useState (0);
const {addProducts,clear,cartProducts} = useContext(CartContext);

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
        
        console.log('viendo items:',count)

    

        const handleOnAdd = ( ) => addProducts(products, count);
 


 
    return(
    
                    <div className="detail-conteiner">
            <div className="detail-conteiner-img">
                <img src={`/asset/products/${products.img}`} />
            </div>

            <div className="detail-conteiner-info">
                <h2>{products.title}</h2>
                <p>{products.price}</p>
                <p><CreditCardIcon /> 12 cuotas <span className="item_span">sin interes</span></p>
                <p className="clase_oferta">Imperdible oferta</p>
                <ItemCount onAdd={onAdd} onLess={onLess} quantity={count} />

                <Button size="small" onClick={handleOnAdd}>Comprar</Button>
                 <div className="caja-carrito">
                         <CartWidget />
                </div>
            </div>
            </div>
                   )
               
    
}
