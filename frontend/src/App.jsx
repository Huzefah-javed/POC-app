import { ToastContainer } from "react-toastify"
import { LoginForm } from "./pages/login"
import { BlogPage } from "./pages/admin/blogs.admin"
import { SidebarComponent } from "./components/sidebar"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { Structure } from "./structure/Structure"
import { AdminPosts } from "./pages/admin/posts.admin"

export const App =()=>{
const router = createBrowserRouter([
    {
        path:"/",
        element:<LoginForm/>
    },
    {
        path:"/admin",
        element:<Structure navMenu={
            [{name:"Blogs", link:"/admin/blogs"}, {name:"Profile", link:"/profile"}, {name:"Your Posts", link:"/admin/viewPosts"},]
        }/>,
        children:[
            {path:"/admin/blogs", element:<BlogPage/>},
            {path:"/admin/viewPosts", element:<AdminPosts/>}
                
        ]
    },
    {
        path:"/user",
        children:[
            {path:"/user/blogs", element:<BlogPage/>}
            // {path:"/profile", element:</>}
                
        ]
    },

])

     return(
         <>
  <RouterProvider router={router}>
  </RouterProvider>
    <ToastContainer/>
          </>
        )  
    }  
