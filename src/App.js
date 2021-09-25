import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListProductConteiner from './components/ItemListConteiner/ItemListConteiner';
import clases from './clases/clases'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="imagenFondo_app"> <h1 className="titulo">Accesorios para la Reina </h1></div>
      <ListProductConteiner greeting={"Bienvenidos"}/>

    </div>
  );
}

export default App;
