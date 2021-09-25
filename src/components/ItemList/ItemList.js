import { useState, useEffect } from "react"
import Products from "../Products/Product";


export default function ItemList ({products}){
    return(
                <>
                {products.map((product)=>{
                   return  (<Products title={product.title} price={product.price} />)
                })}
                </>

   
    )
}

