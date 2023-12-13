import { useContext } from "react";
import { dataContext } from "../cartContent/DataContext";

//import Products from "../products/Products";
import "./style-carrito.css"

const CartElement = () => {
    const {cart} = useContext(dataContext);
  return cart.map((product)=>{
    return(
        <div className="carrito" key={product.id}>
            <img src={ product.img } alt="product-card"/>
            <h3 className="name">{product.name}</h3>
            <h4 className="price">{product.price}$</h4>
        </div>
    )
  })
}

export default CartElement
