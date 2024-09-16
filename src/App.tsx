import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Headers from "./components/Headers"
import './App.css'

function App() {


  return (
    <>
      <Headers/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
