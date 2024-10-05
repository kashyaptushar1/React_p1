import  { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import {nanoid} from "nanoid"
import { useNavigate } from "react-router-dom";

function Create() {

  const nevigate = useNavigate();

  const [products , setproducts] =  useContext(ProductContext)
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");



  const AddProductHandler = (e)=>{
    e.preventDefault();


    if(title.trim().length < 5 || image.trim().length < 5 ||  category.trim().length < 5|| price.trim().length < 1 || description.trim().length<5){
      alert("Enter the field properly")
      return;

    }

    const product = {
      id:nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    
   
    setproducts([...products , product]);
    localStorage.setItem("products",JSON.stringify([...products , product]))// Makeing the local storage
    nevigate("/")
  }
//  console.log(products)

  return (
    <form onSubmit={AddProductHandler} className="flex flex-col p-[5%] w-screen h-screen items-center">
      <h1 className="mb-5 w-1/2 text-3xl">Add new Product</h1>
      <input
        type="url"
        placeholder="Image URL"
        className="text-1xl bg-zinc-200 rounded p-3 m-3 w-1/2"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-200 rounded p-3 m-3 w-1/2"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-center">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-200 rounded p-3 m-3 w-[48%]"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-200 rounded p-3 m-3 w-[48%]"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        onChange={(e) => setdescription(e.target.value)}
        value={description}
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        placeholder="Enter product description here"
      ></textarea>
      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-200 text-blue-400 ">
          Add product
        </button>
      </div>
    </form>
  );
}

export default Create;
