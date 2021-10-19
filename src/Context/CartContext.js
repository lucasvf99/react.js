 import React,{ createContext, useState } from "react";


 const   CartContext = createContext({})

 const CartProvider = ({children}) =>{

  const [cartProducts , setProducts] = useState([])

  const addProducts = (products, count) => {

    let cartElement = {products, count}
        console.log(`cartElement`, cartElement)
           let cartAux = []
               if (isInCart(products)  ) {
                    console.log(`Esta en el carrito`)
                    cartElement = cartProducts.find(element => element.products.id === products.id)
                    cartElement.count = cartElement.count + count
                    cartAux = [...cartProducts] 
                            } else {
                              console.log(`NO esta en el carrito`)
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
   
  const removeItem = (products) => {
    if (isInCart(products)) {
     
      const cartElements = cartProducts.filter(element => element.products.id !== products.id) || []
      setProducts([...cartElements])
    } 
  }

  const removeOneItem = products => {
    if (isInCart(products)) {
          let cartElement = cartProducts.find(element => element.products.id === products.id)
              if (cartElement.count === 1) {
                removeItem(products)
                  } else {    
                    let cart = cartProducts
                      cart.map(element => {
                        if (element.products.id === products.id) {
                        element.count = element.count - 1
                      }
                      return element
                    })
        
        setProducts([...cart])
      }
    } 
  }

     return ( 
         <CartContext.Provider value={{addProducts,clear,cartProducts,removeItem,removeOneItem }}>
             {children}
         </CartContext.Provider>
     )
 }
export default CartContext;
 export {CartProvider}