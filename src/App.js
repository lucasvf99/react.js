import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListProductConteiner from './components/ItemListConteiner/ItemListConteiner';
import clases from './clases/clases'
import { ThemeContext } from '@mui/styled-engine';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import AppRouter from './AppRouter/AppRouter';
import ItemDetail from './components/ItemDtail/ItemDetail';






function App() {
  
// const apipokemon = ' https://pokeapi.co/api/v2/pokemon?limit=10'
// useEffect( () => {

// fetch(apipokemon,  {})
// .then((response)=>{
//    return response.json();
// })
// .then ((users) =>{
//   let pokemones = users.results;
//   console.log(pokemones.map( (pokemon) => pokemon.name))
// });

// }, [])





  return (
    <div className="App">
    
       <AppRouter/>
         <h1 className="titulo">Accesorios para la Reina </h1>
     
    
    </div>
  );
}

export default App;
