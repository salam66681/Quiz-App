import { Outlet } from "react-router-dom"
import Navbar from "./pages/Navbar"

const Root = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Root