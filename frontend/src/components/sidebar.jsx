import { Sidebar, SidebarItems, SidebarItemGroup, SidebarItem } from "flowbite-react";
import { useExecute } from "../hooks/useExecute";
import { logout } from "../apis/main.api";
import Loader from "./Loader";



export const SidebarComponent = ({menus}) => {
  
    const onSuccess = ()=> toast.success("Logout successfully")
    const onError = ()=> toast.error("Logout failed")
            
  
  const {isPending,mutate} = useExecute(logout, onSuccess, onError)
  
  if (isPending) return <Loader/> 
  
  const handleLogout=()=>{
    mutate()
  }
  
  return (
    <Sidebar  className="h-lvh sticky top-0 w-[25%]">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white w-full p-2">POC App</h1>
      <SidebarItems>
        <SidebarItemGroup>
        {
            menus?.map((item)=>{

      return(

        <SidebarItem href={item.link}>
            {item.name}
              </SidebarItem>
                ) 
              })
            }
        <SidebarItem href="/" onClick={handleLogout}>
            Log Out
              </SidebarItem>
                
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
};