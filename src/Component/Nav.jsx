import { ProductContext } from '../utils/Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
function Nav() {
  const [products] = useContext(ProductContext);

  let distinct_category = products && products.reduce((acc,cv)=>[...acc,cv.category],[]);
  distinct_category = products 
  ? [...new Set(products.map((product) => product.category))] 
  : [];

  // console.log(distinct_category)

  const color = ()=>{
    return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.4)`
  }
    color()
  return (
    
       <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5" >
        <a className="py-2 px-5 border rounded border-blue-200 text-blue-400 " href="/create">Add product</a>

        <hr className="my-3 w-[80%]" />
        <h1 className="text-2xl mb-3 w-[80%]" >Category filter</h1>
        <div className="w-[80%]" >

          {distinct_category.map((c,i)=>(
               <Link key={i} to={`/?category=${c}`} className="flex items-center mb-3" > 
               <span style={{backgroundColor: color()}} className=" rounded-full h-[15px] w-[15px] mr-2 " ></span>
               {c}</Link>
          ))}


         
          

        </div>

      </nav>
    
  )
}

export default Nav;
