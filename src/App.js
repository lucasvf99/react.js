import React from 'react';
import './App.css';
import AppRouter from './AppRouter/AppRouter';
//Context 
import {CartProvider} from '../src/Context/CartContext'


function App() {
  
  return (
    <div className="App">
      <CartProvider>
             <AppRouter/>
      </CartProvider>
    </div>
  );
}

export default App;
