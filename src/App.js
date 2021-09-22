import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListProductConteiner from './components/ItemListConteiner/ItemListConteiner';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1 className="titulo">Accesorios para la Reina </h1>
      <ListProductConteiner greeting={"Bienvenidos"}/>

    </div>
  );
}

export default App;
