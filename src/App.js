import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Product';
import ListProduct from './components/ItemListConteiner/ListProduct';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>The Queen Accessories</h1>
      <ListProduct/>
    </div>
  );
}

export default App;
