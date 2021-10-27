import React from "react";
//material 
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Modal = (idProduct) =>{
    return (
        <Stack>
             <Alert severity="success">{idProduct}</Alert>
        </Stack>
    )
}

export default Modal ;