import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';
import axios from '../utils/Axios';

function Home() {
  const [products] = useContext(ProductContext); // Extracting products from context
  // console.log(products);

  const { search } = useLocation();// This the method to implement the fetch nav category data from the URL
  const category = decodeURIComponent(search.split("=")[1]);
  
  const [filteredProducts, setfilteredProducts] = useState(null);


  const getproductscategory = async ()=>{
      try {
        const {data} = await axios.get(`/products/category/${category}`);
        setfilteredProducts(data)
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(()=>{
    if(!filteredProducts || category == "undefined") setfilteredProducts(products);
    if(category != "undefined") getproductscategory()
  },[category , products]);

  // console.log(filteredProducts)

  return (
    products ? (
      <>
        <Nav />
        <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">

          { filteredProducts && filteredProducts.map((p,i)=>(
             <Link key={i} to={`/details/${p.id}`} className="card bg-zinc-100 mr-3 mb-3 p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center">
             <div
               className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-center bg-no-repeat"
               style={{
                 backgroundImage: `url(${p.image})`,
               }}
             />
             <h1>{p.title}</h1>
           </Link>
          ))}

         
        </div>
      </>
    ) : (
      <Loading />
    )
  );
}

export default Home;
