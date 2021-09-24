//Compontents
import './Products.css';
import collar from '../asset/collar-png.jpg'
import ItemCount from '../ItemCount/ItemCount';





 const Products =(props) => {
     const {titulo, price } = props 
    return (
                <div className="conteiner_products">
                        <div>
                            <img src={collar} alt=""/>
                        </div>
                        <h3>{titulo}</h3>
                        <p>{price}</p>
                        <ItemCount stock={5} initial={1}/>
                        <button>Agregar al carrito</button>
                </div>
             
                
                
    )
  }


  export default Products ;