import React, {useState, useEffect } from "react";
import ItemDetail from "../ItemDtail/ItemDetail";
import './ItemListConteiner.css'

function ItemDetailConteiner() {
  
    const [infoProducts, setInfoProducts ] = useState([]); 

    const getProduct = new Promise ((resolve) =>{
        setTimeout(() => {
                const mockProduct = 
                        {
                                title:"Aros Dorados",
                                price: '1700',
                                id:"1",
                                description:"Collar de acero inoxidable",
                                cantidad:5,
                                img:'accesorio.jpg'
                                
                        }
                     
                
                resolve(mockProduct)
        },2000)
})

useEffect (() =>{
     getProduct.then((response) => {
         setInfoProducts(response)
     })           
    
},[])
      return (
        <div className="conteiner-detail">
                <ItemDetail data={infoProducts}/>
        </div>
      );
    }

export default ItemDetailConteiner;
    