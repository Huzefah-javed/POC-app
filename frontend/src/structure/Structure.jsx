import { Outlet } from "react-router"
import { SidebarComponent } from "../components/sidebar"

export const Structure=({navMenu})=>{

    return(<>
        <div className="h-full, w-full flex">
            <SidebarComponent menus={navMenu}/>
           <Outlet/>
        </div>
        
        </>)
}