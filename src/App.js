import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListProductConteiner from './components/ItemListConteiner/ListProduct';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>The Queen Accessories</h1>
      <ListProductConteiner/>
    </div>
  );
}

export default App;
