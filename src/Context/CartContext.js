 import React,{ createContext, useState } from "react";


 const   CartContext = createContext()

 const CartContextProvider = ({children}) =>{

     const [cartItems, setcartItems] = useState([])


     const addItem  = (item, count) => {
    
             let cartElement = { item  , count }

             console.log("CONSOLE desde cartContext", cartElement)
            
             let cartAux = []

             if(isInCart(item)) {
                 cartElement = cartItems.find(element => element.item.id === item.id)
                 cartElement.count = cartElement.count + count 
                 cartAux = [...cartItems]
             }else{
                cartAux = [cartElement, ...cartItems]
             }
            setcartItems (cartAux)
     }

     const Clear = () =>{
   return setcartItems ([])
   }


    const isInCart = (item) => {
        return cartItems  && cartItems.some (element => element.item.id === item.id)

     }
    
   const removeItem = (item) => {
     if (isInCart(item)) {
       const cartElements = cartItems.filter(element => element.item.id !== item.id) || []
       setcartItems([...cartElements])
     } 
   }

     return ( 
         <CartContext.Provider value={addItem(),removeItem(),removeItem(), Clear}>
             {children}
         </CartContext.Provider>
     )
 }
 
export default CartContext;
 export {CartContextProvider}