
import Nav from "./Component/Nav"
import Home from "./Component/Home"
import { Route, Routes } from "react-router-dom"
import Details from "./Component/Details"
function App() {
  return (
    <div className="h-screen w-screen flex" >
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Details/:id" element={<Details/>}/>
     </Routes>

    
   
    </div>
  )
}

export default App
