import React, { useState } from "react";
import Products from "../Products/Product";


const ListProductConteiner  = ({greeting}) => {
        return(
                 <>
         {greeting}
            <div>   
                              
                     <Products titulo="Collar Friends" price="1400$"/>
                     <Products titulo="Collar pirulo" price="1700$"/>
                     <Products titulo="Collar trompo" price="1200$"/>
            </div>
            </>
        )
        
}


export default ListProductConteiner ;