import React, {useState, useEffect } from "react";
import ItemDetail from "../ItemDtail/ItemDetail";
import './ItemListConteiner.css'
import { MockProducts } from "../MockProducts/MockProducts";
import { useParams } from "react-router-dom";

function ItemDetailConteiner() {
  
    const [infoProducts, setInfoProducts ] = useState([]); 
    const {catId ,productId} = useParams();

    const getProduct = new Promise ((resolve) =>{
        setTimeout(() => {
        
                resolve(MockProducts)
        },2000)
})

useEffect (() =>{
     getProduct.then((response) => {
        setInfoProducts(response.find((i) => i.id === productId))
       
     })           
    
},[])
      return (
        <div className="conteiner-detail">
                <ItemDetail  products={ infoProducts } />
        </div>
      );
    }

export default ItemDetailConteiner;
    