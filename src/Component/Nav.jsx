

function Nav() {
  return (
    
       <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5" >
        <a className="py-2 px-5 border rounded border-blue-200 text-blue-400 " href="/create">Add product</a>

        <hr className="my-3 w-[80%]" />
        <h1 className="text-2xl mb-3 w-[80%]" >Category filter</h1>
        <ul className="w-[80%]" >
          <li className="flex items-center mb-3" > 
            <span className="bg-red-400 rounded-full h-[15px] w-[15px] mr-2 " ></span>
            category 1</li>
          <li className="flex items-center mb-3" > 
            <span className="bg-blue-400 rounded-full h-[15px] w-[15px] mr-2 " ></span>
            category 2</li>
          <li className="flex items-center mb-3" > 
            <span className="bg-green-400 rounded-full h-[15px] w-[15px] mr-2 " ></span>
            category 3</li>

        </ul>

      </nav>
    
  )
}

export default Nav
