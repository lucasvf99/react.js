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



  const newOrder = {
     buyer : {
        name: 'lucas',
        email:'lucasvf4379@gmail.com',
        phone: 12123123

     },
     item : cartProducts ,
     total: ''
  }


  const addOrder = () => {
      let totalPrice = cartProducts.reduce(function(prev, current){
        return prev + current.price
      },0);
      newOrder.total = totalPrice 
      console.log ("orden nueva:", newOrder)
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
      <button onClick={addOrder}>Generar orden</button>
    </div>
  )
}

export default CartWidget