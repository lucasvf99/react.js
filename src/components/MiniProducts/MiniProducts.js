import React from 'react'


const MiniProducts = ({products, count}) => {
  const {title, price} = products

  return (
    <div  >
      <p>{title} | {count}u. x ${price}</p>      
    </div>
  )
}

export default MiniProducts;