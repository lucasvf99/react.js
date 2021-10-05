import React   from "react"; 
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
//external components
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Button from '@mui/material/Button';

function ItemDetail(props) {
  

      return (
        <div className="detail-conteiner">
          
           
           <div className="detail-conteiner-img"> 
               <img src= {`/asset/products/${props.data.img}` }/>
           </div>
            
            <div className="detail-conteiner-info">
                <h2>{props.data.title}</h2>
                <p>{props.data.price}</p>
                <p><CreditCardIcon/> 12 cuotas <span className="item_span">sin interes</span></p>
                <p className="clase_oferta">Imperdible oferta</p>
                 < ItemCount stock={5} initial={1}/>
                 <Button size="small">Agregar al carrito</Button>
            </div>
        </div>
        
      );
    }

export default ItemDetail;
    