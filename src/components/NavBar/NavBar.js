import './NavBar.css';
import corona from '../asset/corona.png' 
//external componets
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';







 const NavBar =() => {
    return (
        <AppBar position="static">
          <Toolbar>
          
            <Typography variant="h6" >
            <div className="conteiner_corona">
                <img src={corona} alt="" />
            </div>
            
            </Typography>
                      
                      <ul className ="conteiner_navbar">
                      <li> <Button color="inherit"> Inicio</Button></li>
                      <li> <Button color="inherit"> Productos</Button></li>
                      <li> <Button color="inherit"> Preguntas</Button></li>
                      <li> <Button color="inherit"> Contacto</Button></li>
                      <li>  <Button color="inherit"> <CartWidget/></Button> </li>
           
                      </ul>
               
          </Toolbar>
        </AppBar>
    
    );
  }


  export default NavBar ;