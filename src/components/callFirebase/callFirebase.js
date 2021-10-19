import {collection, query, where, getDocs } from "firebase/firestore";
import db from '../../firebase'

const productRef = collection(db, "produtcts");

async function findProduct (db){
    const q = query(productRef, where("category", "==", "anillos"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());

});
}