import  { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import {nanoid} from "nanoid"
import { useNavigate, useParams } from "react-router-dom";

function Edit() {

  const nevigate = useNavigate();

  const [products , setproducts] =  useContext(ProductContext)
  const {id} =  useParams();
   const [product ,setproduct] =  useState({
    title:"",
    description:"",
    image:"",
    price:"",
    category:"",
   })

   const changeHandler = (e)=>{
    // console.log(e.target.name , e.target.value);
    setproduct({...product, [e.target.name]: e.target.value})
   }
 
  useEffect(() => {
    // Assuming `products` is an array of products and `setproduct` is a function to set the state of a specific product
    setproduct(products.filter((p) => p.id == id)[0]);
}, [id]);
// console.log(product)

  const AddProductHandler = (e)=>{
    e.preventDefault();


    if(product.title.trim().length < 5 || product.image.trim().length < 5 ||  product.category.trim().length < 5|| product.price.trim().length < 1 || product.description.trim().length<5){
      alert("Enter the field properly")
      return;

    }

   
   
   
   
   const pi =  products.findIndex((p) => p.id == id)
   const copyData = [...products]
   copyData[pi] = {...products[pi], ...product}
//    console.log(copyData)
   
    setproducts(copyData);
    localStorage.setItem("products",JSON.stringify(copyData));// Makeing the local storage
    nevigate(-1)
  }
//  console.log(products)

  return (
    <form onSubmit={AddProductHandler} className="flex flex-col p-[5%] w-screen h-screen items-center">
      <h1 className="mb-5 w-1/2 text-3xl">Edit Product</h1>
      <input
        type="url"
        placeholder="Image URL"
        className="text-1xl bg-zinc-200 rounded p-3 m-3 w-1/2"
        name="image"
        onChange={changeHandler}
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-200 rounded p-3 m-3 w-1/2"
        name="title"
        onChange={changeHandler}
        value={product && product.title}
      />
      <div className="w-1/2 flex justify-center">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-200 rounded p-3 m-3 w-[48%]"
          name="category"
          onChange={changeHandler}
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-200 rounded p-3 m-3 w-[48%]"
          name="price"
        onChange={changeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
        name="description"
        onChange={changeHandler}
        value={product && product.description}
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        placeholder="Enter product description here"
      ></textarea>
      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-200 text-blue-400 ">
          Edit product
        </button>
      </div>
    </form>
  );
}

export default Edit;
