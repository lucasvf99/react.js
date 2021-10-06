import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import clases from './clases/clases'
import { ThemeContext } from '@mui/styled-engine';
import AppRouter from './AppRouter/AppRouter';







function App() {
  
  return (
    <div className="App">
        
       <AppRouter/>
    
    </div>
  );
}

export default App;
