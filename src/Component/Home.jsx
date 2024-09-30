import { Link } from 'react-router-dom';
import Nav from './Nav';
import { useContext } from 'react';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';

function Home() {
  const [products] = useContext(ProductContext); // Extracting products from context
  // console.log(products);

  return (
    products ? (
      <>
        <Nav />
        <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">

          {products.map((p,i)=>(
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
