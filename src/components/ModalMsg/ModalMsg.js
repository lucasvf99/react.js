import React from "react";
import { Modal,Alert } from "@mui/material";


const ModalMsg =({msg,open,close}) =>{
    


    return (
        <Modal open={open} onClose={()=>close()} >
            <div>
                <Alert severity="success"> 
                    {msg}
                </Alert>
            </div>
        </Modal>
    )
}

export default ModalMsg ;