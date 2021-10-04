//Components
import React,{useState, useEffect } from 'react';
import './NavBar.css';
import corona from '../asset/corona.png' ;
import { Link } from 'react-router-dom';

//external componets
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';







 const NavBar =() => {

  const categories = [
    {id:'1', address: '/', text:'Productos' },
    {id:'2', address: 'category/Anillos', text:'Anillos' },
    {id:'3', address: 'category/Collares', text:'Collares' },
    {id:'4', address: 'category/Aritos', text:'Aritos' },
    {id:'5', address: 'category/Dijes', text:'Dijes' },
  ];


 



    return (
        <AppBar position="static">
          <Toolbar>
          
            <Typography variant="h6" >
            <div className="conteiner_corona">
                <img src={corona} alt="" />
            </div>
            
            </Typography>
                      
                      <ul className ="conteiner_navbar">
                      <li> <Link to="/"><Button color="inherit"> Inicio</Button></Link></li>
                      <li> 
                        {categories.map ((cat)=>{
                          return (
                             <Link exact to={cat.address} ><Button color="inherit"> {cat.text}</Button></Link>
                          )
                        })}
                     
                      </li>
                      <li> <Button color="inherit"> Preguntas</Button></li>
                      <li> <Link to="/contacto"><Button color="inherit"> Contacto</Button> </Link></li>
                      <li>  <Button color="inherit"> <CartWidget/> <span> </span></Button> </li>
           
                      </ul>
               
          </Toolbar>
        </AppBar>
    
    );
  }


  export default NavBar ;