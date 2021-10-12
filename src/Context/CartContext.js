 import React,{ createContext, useState } from "react";


 const   CartContext = createContext({})

 const CartProvider = ({children}) =>{

  const [cartProducts , setProducts] = useState([])

  const addProducts = (products, count) => {
    let cartElement = {products, count}
    console.log(`cartElement`, cartElement)
    let cartAux = []
    if (isInCart(products)) {
      console.log(`Esta en el 🛒`)
      cartElement = cartProducts.find(element => element.products.id === products.id)
      cartElement.count = cartElement.count + count
      cartAux = [...cartProducts] 
    } else {
      console.log(`NO esta en el 🛒`)
      cartAux = [cartElement, ...cartProducts]
    }
    setProducts(cartAux)
  }


  const isInCart = (products) => {
    return cartProducts && cartProducts.some(element => element.products.id === products.id)
  }

  const clear = () => {
   return setProducts([])
  }
   

     return ( 
         <CartContext.Provider value={{addProducts,clear,cartProducts }}>
             {children}
         </CartContext.Provider>
     )
 }
export default CartContext;
 export {CartProvider}