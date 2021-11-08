import React, { useContext,useEffect,useState } from 'react'
import MiniProducts from '../MiniProducts/MiniProducts'
import './CartWidget.css'
import ModalMsg from '../ModalMsg/ModalMsg';
import {useHistory } from 'react-router-dom';
//external components
import CancelIcon from '@mui/icons-material/Cancel';
//Context
import CartContext from '../../Context/CartContext'
import {PushFirebProvider}  from '../../Context/FirebaseContext'
// //Firebase
import db from '../../firebase'
 import { collection, addDoc } from '@firebase/firestore';



const CartWidget = ({show,close}) => {

  const history = useHistory()
  const {cartProducts, clear,removeOneItem,} = useContext(CartContext)
  
  const [alertProduct , setAlertProduct] = useState(false)
  const [msjAlert, setMsjAlert] = useState()
 

  

  

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
         // alert( `Compra exitosa, numero de producto: ${order.id} ${order.title}` )
         setMsjAlert (`Se genero la orden ${order.id}` )
         setAlertProduct(true)
         setTimeout(() => {
           setAlertProduct(false)
           history.push('/cart/final')
        }, 2000);
    }
   
  
    const alertCart = () =>{
       setAlertProduct (!alertProduct)
    }

 useEffect(() =>{

 },[])

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
                     <button onClick={()=>pushOrderFirebase(newOrder)}> Finalizar Compra</button>
                  </div>
                <ModalMsg msg={msjAlert} open={alertProduct} close={alertCart}/>
    </div>
   
  )
}

export default CartWidget