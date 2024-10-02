
// import Nav from "./Component/Nav"
import Home from "./Component/Home"
import { Route, Routes, useLocation } from "react-router-dom"
import Details from "./Component/Details"
import { Link } from "react-router-dom"
function App() {
const {search , pathname} =   useLocation()
  return (
    <div className="h-screen w-screen flex" >

      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className="text-red-300 absolute left-[17%] top-[3%] " >Home</Link>
      )}



     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Details/:id" element={<Details/>}/>
     </Routes>

    
   
    </div>
  )
}

export default App
