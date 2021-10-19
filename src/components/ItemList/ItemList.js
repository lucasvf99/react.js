import { useState, useEffect } from "react"
import Products from "../Products/Product";



export default function ItemList ({products}){
    return(
                <>
                { products.map((product)=>{
                   return  (<Products products={product} {...product} key={product.id} />)
                })}
                </>

   
    )
}

