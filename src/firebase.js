// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuNMmsVHzsRiL98lFKFsDaTt9T609ii2g",
  authDomain: "tqa-ecommerce.firebaseapp.com",
  projectId: "tqa-ecommerce",
  storageBucket: "tqa-ecommerce.appspot.com",
  messagingSenderId: "286902638071",
  appId: "1:286902638071:web:0dbb636be9cc6cfb300af2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db