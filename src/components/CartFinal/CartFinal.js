import React,{useState} from "react";
import {TextField,Button,Divider,IconButton,Alert} from '@mui/material'
import {Check} from '@material-ui/icons'
// import './cartFinalStyles.css'

const CartFinal = () =>{

    const [isError,setIsError] = useState(false)
    const [errorMsg,setErrorMsg] = useState(null)

    const [usr, setUsr] = useState ({email :"", password:""})

    const guardaValores = (campo,event)=>{
        setUsr ({... usr,[campo]:event.target.value})
        console.log('valoresInput', usr)
    }

    const pushUsr = ()=>{
    
    }


    return(
        <>
            <div className="container" id="caja-principal">
               <div id="caja-formulario">
                    <h3>Ultimo paso para finalizar tu compra, Completa los datos del registro</h3>
                    <Divider />
                    <TextField margin="normal" variant="outlined" label="Email" placeholder="Ingrese tu email aqui..." onClick={(value)=>guardaValores('Email',value) } />
                    <TextField margin="normal" variant="outlined" label="password" placeholder="Ingrese tu nombre aqui..." onClick={(value)=>guardaValores('password',value) } />
                    <div id="caja-btn">
                       {/*  <Button id="btn-confirmar" variant="contained" >Confirmar</Button> */}
                       <IconButton >
                           <Check id="check-btn"  />
                       </IconButton>
                    </div>
               </div>
            </div>


        </>
    )
}


export default CartFinal;