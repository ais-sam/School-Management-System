import  SideBar  from "./Sidebar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="h-screen flex">
    <SideBar/>
    <Outlet/>
    </div>
  )
}

export default Layout