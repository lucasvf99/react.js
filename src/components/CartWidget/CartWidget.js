import React, { useContext } from 'react'
import MiniProducts from '../MiniProducts/MiniProducts'
import './CartWidget.css'
//external components
import CancelIcon from '@mui/icons-material/Cancel';
//Context
import CartContext from '../../Context/CartContext'

const CartWidget = ({show,close}) => {

  const {cartProducts, clear,setProducts} = useContext(CartContext)
  
  console.log('fijando si funciona ', show) 

 const cartEmpty = () => {
  if (cartProducts===[]){
    setProducts(["No hay productos seleccionados "])
  }
  }


  return (
    <div className={`conteiner-cart  ${show ? 'active' : ''}`}>
      
      <div className="close-boton">
     <button onClick={close}><CancelIcon/></button>
     </div> 
      <div className="title-cart"> 
        <h2>🛒 Carrito</h2> 
      </div> 
     
      <div className="product-cart" >
        {cartProducts.map(element => <MiniProducts {...element}   />)}
      </div>
       <div className="clear-cart">
        <button onClick={clear}>Limpiar carrito</button>
      </div>
    </div>
  )
}

export default CartWidget