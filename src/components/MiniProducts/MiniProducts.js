import React,{useContext} from 'react'
import './MiniProducts.css'
import DeleteIcon from '@mui/icons-material/Delete';
//External Components
import Button from '@mui/material/Button';
//Context
import CartContext from '../../Context/CartContext'

const MiniProducts = ({products, count}) => {
  const {title, price,img} = products

  const {removeItem,removeOneItem} =useContext(CartContext)

  const removeItems = ( ) => removeItem(products, count);

  return (
    <div className="conteiner-cart-products" key={products.id}>
      <div>
        <div className="conteiner-img-cart"> <img src= {`/asset/products/${img}` } alt="imagen"/></div>
        </div>
      <div> 
        <p>{title} | {count }u. x ${price}</p> 
        <Button className="remove-one-cart" variant="outlined" onClick={() => removeOneItem( products,count) }>
                                   Eliminar un Item
             </Button> 
        </div>
        <div>
          <DeleteIcon onClick={removeItems}/>
        </div>
    </div>
  )
}

export default MiniProducts;