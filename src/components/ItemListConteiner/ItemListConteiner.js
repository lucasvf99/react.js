import React, { useState, useEffect } from "react";
import Products from "../Products/Product";
import ItemList from "../ItemList/ItemList";
import '../ItemListConteiner/ItemListConteiner.css'
import { MockProducts } from "../MockProducts/MockProducts";
import { useParams } from "react-router-dom";



const ListProductConteiner  = ({}) => {
        const [products, setProducts] = useState([])
        const {catId} = useParams();

        const getProducts = new Promise ((resolve) =>{
                setTimeout(() => {
                        resolve(MockProducts)
                },2000)
        })

        useEffect (() =>{
                getProducts.then((res)=>{
                        catId ? setProducts(res.filter((i) => i.category === catId)) : setProducts(res)
                })
        },[catId])

        return(
                 <>
       
            <div className="caja_listProducts">   
                              
            <ItemList products={ products } />
                    
            </div>
            </>
        )
        
}


export default ListProductConteiner ;