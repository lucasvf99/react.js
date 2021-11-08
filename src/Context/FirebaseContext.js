// import React,{ createContext, useContext} from "react";
// //Context
// import CartContext from '../Context/CartContext'
// //Firebase
// import db from '../src/firebase'
// import { collection, addDoc } from '@firebase/firestore';



// const   PushFireb = createContext({})

// const PushFirebProvider = ({children}) =>{
// const {cartProducts} = useContext(CartContext)


// const newOrder = {
//     buyer : {
//        name: 'lucas',
//        email:'lucasvf4379@gmail.com',
//        phone: 12123123

//     },
//     item : cartProducts ,
//     total: ''
//  }


//  const addOrder = () => {
//      let totalPrice = cartProducts.reduce(function(prev, current){
//        return prev + current.products.price
//      },0);
//      newOrder.total = totalPrice 
//      console.log ("orden nueva:", newOrder)
//      pushOrderFirebase(newOrder)
   
//    }
   



//    const pushOrderFirebase = async (newOrder) =>{
//        const orderFirebase = collection(db,'orders')
//        const order = await  addDoc(orderFirebase , newOrder)
//        console.log('genero la orden con el id ', order.id)
//        // alert( `Compra exitosa, numero de producto: ${order.id} ${order.title}` )
//        setMsjAlert (`Se genero la orden ${order.id}` )
//        setAlertProduct(true)
//        setTimeout(() => {
//          setAlertProduct(false)
//          history.push('/cart/final')
//       }, 2000);
//   }
  
 
 


// useEffect(() =>{

// },[])

    
//     return ( 
//         <PushFireb.Provider value={{pushOrderFirebase }}>
//             {children}
//         </PushFireb.Provider>
//     )
// }

// export default PushFireb;
//  export {PushFirebProvider}