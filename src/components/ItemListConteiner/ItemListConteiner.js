import React, { useState, useEffect } from "react";
import Products from "../Products/Product";
import ItemList from "../ItemList/ItemList";

const ListProductConteiner  = ({greeting}) => {
        const [products, setProducts] = useState([])
        
        const getProducts = new Promise ((resolve) =>{
                setTimeout(() => {
                        const mockProducts = [
                                {
                                        title:"collar 1",
                                        price:1200,
                                        id:"1",
                                        description:"collar de acero inoxidable",
                                        stock:5
                                        
                                },
                                {
                                        title:"collar 2",
                                        price:1500,
                                        id:"2",
                                        description:"collar de acero inoxidable",
                                        stock:5
                                        
                                },
                                {
                                        title:"collar 3",
                                        price:1240,
                                        id:"3",
                                        description:"collar de acero inoxidable",
                                        stock:5
                                        
                                },

                        ]
                        resolve(mockProducts)
                },2000)
        })

        useEffect (() =>{
                getProducts.then((res)=>{
                        setProducts(res)
                })
        },[])

        return(
                 <>
         {greeting}
            <div className="caja_listProducts">   
                              
            <ItemList products={ products } />
                    
            </div>
            </>
        )
        
}


export default ListProductConteiner ;