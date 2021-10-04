import { useState, useEffect } from "react"
import Products from "../Products/Product";
import ItemListConterner from '../ItemListConteiner/ItemListConteiner'


export default function ItemList ({products}){
    return(
                <>
                {products.map((product)=>{
                   return  (<Products {...product} key={product.id} />)
                })}
                </>

   
    )
}

