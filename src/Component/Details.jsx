import { useContext, useEffect, useState } from "react"
// import { ProductContext } from "../utils/Context"
import axios from "../utils/Axios";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";



function Details() {
  const nevigate = useNavigate()

  const [products , setproducts] =  useContext(ProductContext)
  const [product , setproduct] = useState(null);

  const {id}  = useParams();


  
  // const getsingleproducts = async () =>{
  //   try {
  //     const {data} = await axios.get(`/products/${id}`);
  //     setproduct(data);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(()=>{
    if(!product){
      setproduct(products.filter((p)=>p.id == id)[0])
    }
    // getsingleproducts();
  },[])

  const productDeleteHandler = (id)=>{
    const filteredproducts =  products.filter(p=> p.id !== id);
    
    setproducts(filteredproducts);
    localStorage.setItem("products",JSON.stringify(filteredproducts))
    nevigate ("/")
  }

  return (product?
    <div className="w-[70%] h-full m-auto p-[10%] flex items-center justify-center gap-5" >
        <img
        className="object-contain h-[80%] w-[40%] "
         src={`${product.image}`} alt="" />

         <div className="content  w-[50%] " >
            <h1 className="text-4xl" >{product.title}</h1>
            <h3 className="text-zinc-400 my-5" >{product.category}</h3>
            <h2 className="text-red-300 mb-3" >$ {product.price}</h2>
            <p className="mb-3" >{product.description}</p>
            <Link to={`/edit/${product.id}`} className="mr-5 py-2 px-5 border rounded border-blue-200 text-blue-300" > Edit </Link>
            <button onClick={()=>productDeleteHandler(product.id)} className="mr-5 py-2 px-5 border rounded border-red-200 text-red-300" > Delete </button>
         </div>
      
    </div>:<Loading/>
  )
}

export default Details
