import { ToastContainer } from "react-toastify"
import { LoginForm } from "./pages/login"
import { BlogPage } from "./pages/blogs"
import { SidebarComponent } from "./components/sidebar"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { Structure } from "./structure/Structure"
import { AdminPosts } from "./pages/admin/posts.admin"
import { ViewPost } from "./pages/admin/ViewPost"
import { UserProfile } from "./pages/User/UserProfile"

export const App =()=>{
const router = createBrowserRouter([
    {
        path:"/",
        element:<LoginForm/>
    },
    {
        path:"/admin",
        element:<Structure navMenu={
            [{name:"Blogs", link:"/admin/blogs"}, {name:"Profile", link:"/admin/profile"}, {name:"Your Posts", link:"/admin/viewPosts"},]
        }/>,
        children:[
            {path:"/admin/blogs", element:<BlogPage/>},
            {path:"/admin/blogs/:postId", element:<ViewPost/>},
            {path:"/admin/viewPosts", element:<AdminPosts/>},        
            {path:"/admin/profile", element:<UserProfile/>}
        ]
    },
    {
        path:"/user",
          element:<Structure navMenu={
            [{name:"Blogs", link:"/user/blogs"}, {name:"Profile", link:"user/profile"}]
            }/>,
        children:[
            {path:"/user/blogs", element:<BlogPage/>},
            {path:"user/profile", element:<UserProfile/>}
                
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
