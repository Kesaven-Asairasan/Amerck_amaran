import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Layouts/Navbar"
import AboutUs from "./Pages/AboutUs"
import BeforeAndAfter from "./Pages/BeforeAndAfter"
import Header from "./Components/Layouts/Header"


function App() {


  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/beforeandafter" element={<BeforeAndAfter/>} />

      </Routes>
      <Home />
    </div>
  )
}

export default App
