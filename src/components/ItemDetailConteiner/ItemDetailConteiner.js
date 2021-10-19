import React, {useState, useEffect } from "react";
import ItemDetail from "../ItemDtail/ItemDetail";
import './ItemListConteiner.css'
import { MockProducts } from "../MockProducts/MockProducts";
import { useParams } from "react-router-dom";
//Firebase
import db from '../../firebase'
import { collection,getDocs, doc,getDoc} from "firebase/firestore";

function ItemDetailConteiner() {
  
    const [infoProducts, setInfoProducts ] = useState([]); 
    const {productId} = useParams();


      
     async function getProduct (db) {
                  
                const productRef = doc(db, "produtcts", productId);
                const productSnap = await getDoc(productRef); 
                const idFirebase = { myId: productSnap.id, ...productSnap.data() };  
                console.log("idFirebase:",idFirebase)
                setInfoProducts( idFirebase)
                
                
         }


useEffect (() =>{
//      getProduct.then((response) => {
//        setInfoProducts(response.find((i) => i.id === productId))
       
//      })           
                
                getProduct(db)
},[])


      return (
        <div className="conteiner-detail">
                <ItemDetail  products={ infoProducts } />
        </div>
      );
    }

export default ItemDetailConteiner;
    