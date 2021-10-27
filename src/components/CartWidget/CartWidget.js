import React, { useContext,useEffect,useState } from 'react'
import MiniProducts from '../MiniProducts/MiniProducts'
import './CartWidget.css'
import { Link } from 'react-router-dom';
import Modal from '../Modal/modal';
//external components
import CancelIcon from '@mui/icons-material/Cancel';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
//Context
import CartContext from '../../Context/CartContext'
//Firebase
import db from '../../firebase'
import { collection, addDoc } from '@firebase/firestore';



const CartWidget = ({show,close}) => {

  
  const {cartProducts, clear,removeOneItem,} = useContext(CartContext)
  
  const [alertProduct , setAlertProduct] = useState(false)

 

  

  

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
        return prev + current.products.price
      },0);
      newOrder.total = totalPrice 
      console.log ("orden nueva:", newOrder)
      pushOrderFirebase(newOrder)
    
    }
    



    const pushOrderFirebase = async (newOrder) =>{
        const orderFirebase = collection(db,'orders')
        const order = await  addDoc(orderFirebase , newOrder)
        console.log('genero la orden con el id ', order.id)
        alert( `Compra exitosa, numero de producto: ${order.id} ${order.title}` )
   }
   
  
   const alertCart = () =>{
    !alertProduct ? setAlertProduct(true) : setAlertProduct(false)
    console.log('esto anda:',alertProduct )
   }

  useEffect(()=>{

  })


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
    <button onClick={alertCart}> Finalizar Compra</button>

    <div className={`conteiner-alert  ${alertProduct ? 'active' : ''}`} >

    <button onClick={alertCart}><CancelIcon/></button>
    
    <Stack sx={{ width: '100%' }} spacing={2}>
    <Alert severity="success">{alertProduct}</Alert>
      </Stack>
    </div>
    </div>
   
  )
}

export default CartWidget