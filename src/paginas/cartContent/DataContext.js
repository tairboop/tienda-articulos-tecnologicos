import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({children}) => {
    const [data,setData] = useState([]); //array de productos
    const [cart,setCart] = useState([]); //array del carrito 
    
    useEffect(()=>{
        axios("data.json").then((res)=> setData(res.data))
    },[]);

    return(
        <dataContext.Provider value={{ data, cart, setCart }}>
            {children}
        </dataContext.Provider>
    )
};

export default DataProvider;