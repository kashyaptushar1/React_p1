
// import Nav from "./Component/Nav"
import Home from "./Component/Home"
import { Route, Routes, useLocation } from "react-router-dom"
import Details from "./Component/Details"
import { Link } from "react-router-dom"
import Create from "./Component/Create"
import Edit from "./Component/Edit"
function App() {
const {search , pathname} =   useLocation()
  return (
    <div className="h-screen w-screen flex" >

      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className="text-red-300 absolute left-[17%] top-[3%] " >Home</Link>
      )}
      {/* this is for Home button not showing Home screen implement using useLocation */}



     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Create" element={<Create/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
      <Route path="/Details/:id" element={<Details/>}/>
     </Routes>

    
   
    </div>
  )
}

export default App
