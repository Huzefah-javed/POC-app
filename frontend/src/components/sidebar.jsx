import { Sidebar, SidebarItems, SidebarItemGroup, SidebarItem } from "flowbite-react";

export const SidebarComponent = ({menus}) => {
  return (
    <Sidebar  className="h-lvh sticky top-0">
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
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
};