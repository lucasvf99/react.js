import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "../ItemListConteiner/ItemListConteiner.css";
import { useParams } from "react-router-dom";
//firebase
import db from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


const ListProductConteiner = ({}) => {

   const [products, setProducts] = useState([]);
   const [loader, setLoader] = useState(true);
   const { catId } = useParams();


   useEffect(() => {
           
      async function getProducts(db) {
         const productsCol = catId
            ? query(collection(db, "produtcts"), where("category", "==", catId))
            : collection(db, "produtcts");
         const productsSnapshot = await getDocs(productsCol);
         const productsList = productsSnapshot.docs.map((doc) => {
            const myData = doc.data();

            return { ...myData, myId: doc.id };
         });

         return setProducts(productsList);
      }
      getProducts(db);
   }, [catId]);
   return (
      <>
         <div className="caja_listProducts">
            <ItemList products={products} />
         </div>
      </>
   );
};
export default ListProductConteiner;



