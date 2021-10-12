// //import { CartContext } from 'context/CartContext'

// //const Product = (props) => {
//   const {id, title, stock, price, img} = item
//   const {addItem, cartItems, isInCart, removeItem, removeOneItem, handleTotalPriceByItem} = useContext(CartContext)
//   const {title, stock, price, color} = item
//   const {addItem, removeItem, removeOneItem} = useContext(CartContext)

//   const handleOnAdd = count => addItem(item, count)

//   return (
//     <div className={styles.product}>
//       {img && <img src={img.src} alt={img.alt} />}
//     <div className={styles.product} style={{backgroundColor: color}}>      
//       <h3>{title}</h3>
//       <p>${price}</p> 
//       <Counter stock={stock} onAdd={handleOnAdd} /> 
//       <button onClick={() => isInCart(item)}>Esta en el carrito?</button> 
//       <div className={styles.counter}>
//         <Counter stock={stock} onAdd={handleOnAdd} /> 
//       </div>
//       <button onClick={() => removeItem(item)}>Quitar del carrito</button>
//       <button onClick={() => removeOneItem(item)}>Quitar 1 elemento del carrito</button>
//       <button onClick={() => handleTotalPriceByItem()}>nuevo array con precio total</button>
//       <button onClick={() => removeOneItem(item)}>Quitar 1</button>      
//     </div>
//     </div>
//   )
// }