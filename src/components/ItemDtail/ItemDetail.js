
import ItemListConterner from '../ItemListConteiner/ItemListConteiner'
import ProductDetail from "../ProductDetail/ProductDetail";


export default function ItemDetail ({products}){
    return(
                <>
                { products.map((product)=>{
                   return  (<ProductDetail {...product} key={product.id} />)
                })}
                </>

   
    )
}
