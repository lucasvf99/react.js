import React, { useState, useEffect } from "react";
import Products from "../Products/Product";
import ItemList from "../ItemList/ItemList";
import '../ItemListConteiner/ItemListConteiner.css'
import { MockProducts } from "../MockProducts/MockProducts";
import { useParams } from "react-router-dom";
//firebase
import db from '../../firebase'
import { collection,getDocs,doc,getDoc} from "firebase/firestore";


const ListProductConteiner  = ({}) => {
      
                const [products, setProducts] = useState([]);
                const [loader, setLoader] = useState (true);
                const {catId,productId} = useParams();

                

        async function getProducts(db) {
        const productsCol = collection(db, 'produtcts');
        const productsSnapshot = await getDocs(productsCol);
        const productsList = productsSnapshot.docs.map(doc => doc.data());
        return setProducts(productsList);
       
      }

      async function getProduct (db) {
                  
        const productRef = doc(db, "produtcts", productId);
        const productSnap = await getDoc(productRef); 
        const idFirebase = { myId: productSnap.id, ...productSnap.data() };  
        console.log("idFirebase:",idFirebase)
        setProducts( idFirebase)
        
        
 }
     

       
        
       
 

        useEffect (() =>{
                // getProducts.then((res)=>{
                //         catId ? setProducts(res.filter((i) => i.category === catId)) : 
                //         setProducts(res);
                getProducts(db)
                getProduct(db)
              
        },[])

        return(
                 <>
       
            <div className="caja_listProducts">   
                              
            <ItemList products={ products } />
                    
            </div>
            </>
        )
        
}


export default ListProductConteiner ;





// async function getProducts(db) {
//         const productsCol = collection(db, 'produtcts');
//         const productsSnapshot = await getDocs(productsCol);
//         const productsList = productsSnapshot.docs.map(doc => doc.data());
//         return setProducts(productsList);
//       }

// useEffect (() =>{
//       getProducts(db)
// },[])

// return(
//          <>

//     <div className="caja_listProducts">   
                      
//     <ItemList products={ products } />
            
//     </div>
//     </>
// )

// }