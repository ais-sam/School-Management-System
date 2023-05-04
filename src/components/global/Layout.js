import  SideBar  from "./Sidebar"
import { Outlet } from "react-router-dom"
import TopBar from "./TopBar"

const Layout = () => {
  return (
    <div className="min-h-screen flex">
    <SideBar/>
    <div className="border bg-d-bg-gray flex-grow ">
      <TopBar/>
      <div className="px-4 pt-8 pb-2">
        <Outlet/>
      </div>
      </div>
    </div>
  )
}

export default Layout