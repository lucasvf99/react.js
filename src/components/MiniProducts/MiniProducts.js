import React,{useContext} from 'react'
import './MiniProducts.css'
import DeleteIcon from '@mui/icons-material/Delete';
//Context
import CartContext from '../../Context/CartContext'

const MiniProducts = ({products, count}) => {
  const {title, price,img} = products

  const {removeItem} =useContext(CartContext)

  const removeItems = ( ) => removeItem(products, count);

  return (
    <div className="conteiner-cart-products">
      <div>
        <div className="conteiner-img-cart"> <img src= {`/asset/products/${img}` } alt="imagen"/></div>
        </div>
      <div> 
        <p>{title} | {count + 1}u. x ${price}</p> 
        </div>
        <div>
          <DeleteIcon onClick={removeItems}/>
        </div>
    </div>
  )
}

export default MiniProducts;