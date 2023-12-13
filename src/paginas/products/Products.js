import { useContext } from "react";
import { dataContext } from "../cartContent/DataContext";

import "./style-products.css";

const Products = () => {
    const {data, cart, setCart } = useContext(dataContext);

    const buyProducts = (product) =>{
      alert("compraste el producto")
      //setCart([...cart,product]);
    }
  return data.map((product)=>{
    return(
      <div className="card" key={product.id}>
        <img src={product.img} alt='img-product-card' />
        <h3>{product.name}</h3>
        <h4>{product.price}$</h4>
        <button onClick={() => buyProducts(product)}>comprar</button>
      </div>
    )
  })
}

export default Products
