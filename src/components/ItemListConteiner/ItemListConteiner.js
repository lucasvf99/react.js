import React, { useState, useEffect } from "react";
import Products from "../Products/Product";
import ItemList from "../ItemList/ItemList";
import '../ItemListConteiner/ItemListConteiner.css'

const ListProductConteiner  = ({greeting}) => {
        const [products, setProducts] = useState([])
        
        const getProducts = new Promise ((resolve) =>{
                setTimeout(() => {
                        const mockProducts = [
                                {
                                        title:"collar 1",
                                        price: ' $1700',
                                        id:"1",
                                        description:"Collar de acero inoxidable",
                                        cantidad:5,
                                        img:'accesorio.jpg'
                                        
                                },
                                {
                                        title: "Collar 2",
                                        price: ' $1500',
                                        id:"2",
                                        description:"Collar de acero inoxidable",
                                        cantidad:6,
                                        img:'accesorio2.jpg'

                                        
                                },
                                {
                                        title:"collar 3",
                                        price: '$ 1240',
                                        id:"3",
                                        description:"Collar de acero inoxidable",
                                        cantidad:8,
                                        img:'accesorio 3.jpg'
                                        
                                },
                                {
                                        title:"collar 3",
                                        price: '$ 1240',
                                        id:"3",
                                        description:"Collar de acero inoxidable",
                                        cantidad:8,
                                        img:'accesorio 4.jpg'
                                },
                                {
                                        title:"collar 3",
                                        price: '$ 1240',
                                        id:"3",
                                        description:"Collar de acero inoxidable",
                                        cantidad:8,
                                        img:'accesorio.jpg'
                                },
                                {
                                        title:"collar 3",
                                        price: '$ 1240',
                                        id:"3",
                                        description:"Collar de acero inoxidable",
                                        cantidad:8,
                                        img:'accesorio 4.jpg'
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