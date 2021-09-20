import './Products.css';
import collar from '../asset/collar-png.jpg'






 const Products =(props) => {
     const {nombre, price } = props 
    return (
                <div className="conteiner_products">
                        <div>
                            <img src={collar} alt=""/>
                        </div>
                        <h3>{nombre}</h3>
                        <p>{price}</p>
                        <button>Comprar</button>
                </div>
             
                
                
    )
  }


  export default Products ;