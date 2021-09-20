import React from "react";
import Products from "../Products/Product";


class ListProduct  extends React.Component {
    render (){
        return(
            <div>
                     <Products titulo="Collar Friends" price="1400$"/>
                     <Products titulo="Collar pirulo" price="1700$"/>
                     <Products titulo="Collar trompo" price="1200$"/>
            </div>
        )
        }
}


export default ListProduct;