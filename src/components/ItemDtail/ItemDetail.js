import { useState, useEffect } from "react"
import ItemListConterner from '../ItemListConteiner/ItemListConteiner'
import ProductDetail from "../ProductDetail/ProductDetail";
import { Link } from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

//external components
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Button from '@mui/material/Button';


export default function ItemDetail ({products,props}){


 const [items, setItem] = useState (0);
 const [stock, setStock] = useState(6)


 

 const onAdd = () => {
 if(items<props.cantidad){
   setItem(items +1)
 }
 }
 const onLess = () =>{
   if(items >  0){
     setItem(items - 1)
   }
 }
    return(
        

                <>
                { products.map((props)=>{
                   return  (
                    <div className="detail-conteiner">
                    <div className="detail-conteiner-img"> 
                        <img src= {`/asset/products/${props.img}` }/>
                    </div>
                     
                     <div className="detail-conteiner-info">
                         <h2>{props.title}</h2>
                         <p>{props.price}</p>
                         <p><CreditCardIcon/> 12 cuotas <span className="item_span">sin interes</span></p>
                         <p className="clase_oferta">Imperdible oferta</p>
                          < ItemCount onAdd ={onAdd} onLess={onLess} quantity={items } />
                         <Link to='/cart'> <Button size="small">Comprar</Button></Link>
                 
                     </div>
                 </div>
                 
                   )
                })}
                </>

   
    )
}
