import axios from "./axios";
import { createContext, useEffect, useState } from "react";
export const ProductContext = createContext();

function Context(props) {
  // show data if its is in local storage
    const [products , setproducts] =  useState( JSON.parse(localStorage.getItem("products")) || null);

    const getproducts = async () =>{
        try {
            const {data} = await axios("/products");
            setproducts(data);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(products)
  useEffect(()=>{
    getproducts();
  }, [])

  return (
    <ProductContext.Provider value={[products , setproducts]}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default Context
