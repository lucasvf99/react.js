import { useState, useEffect } from "react"
import Products from "../Products/Product";
import ItemListConterner from '../ItemListConteiner/ItemListConteiner'


export default function ItemList ({products}){
    return(
                <>
                {products.map((product)=>{
                   return  (<Products key={product.id} title={product.title} price={product.price} description={product.description} cantidad={product.cantidad} image={product.img} />)
                })}
                </>

   
    )
}

