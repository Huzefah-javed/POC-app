import { useParams } from "react-router"
import { useFetch } from "../../hooks/useFetch"
import Loader from "../../components/Loader"
import {Avatar, Badge, Button, Card, Pagination} from "flowbite-react"
import { singlePost } from "../../apis/admin/admin.api"
import { useState } from "react"
import { UpdatePost } from "../../components/UpdatePost"

export const ViewPost=()=>{
       const {postId} = useParams()
       const [updatedPost, setUpdatedPost] = useState({
        title:"", description:""
       })


     const {data,error,isError,isLoading} = useFetch(()=>singlePost(postId), ["viewPost", postId])

      if(isLoading) return <Loader/>
      if(isError) toast.error(error)


        const post = data.data

        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    return (
           <div className="bg-gray-700 w-full">
              <header className="flex justify-between items-center w-full p-3 bg-gray-600 ">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white w-full p-2">Post</h1>
                  <Button onClick={()=> setUpdatedPost({title:post.title, description:post.description})} color="blue" className="text-center">Update Post</Button>
              </header>
               <Card id={post._id} className="m-2">
                    <div className="flex items-center gap-1 rounded-lg">
              <Avatar 
                rounded 
                size="sm"  
              />
        
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold text-gray-900 dark:text-white">{userInfo.name}</h2>
                  <Badge color="info" size="sm">
                    {userInfo.role}
                  </Badge>
                </div>
        
                <p className="text-sm text-gray-500 font-medium">{userInfo.email}</p>
              </div>
            </div>
                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white w-full p-1 ">{post.title}</h2>
                 <p className="text-1xl text-gray-900 dark:text-white w-full p-1">{post.description}</p>
                { post.imgUrl &&
                  <img className="w-full max-h-1/2" src={post.imgUrl} alt="error" />
                } 
              </Card>

              {
                updatedPost.title && updatedPost.description &&
                <UpdatePost
                currentDescription={updatedPost.description}
                currentTitle={updatedPost.title}
                onClose={()=>setUpdatedPost({title:"", description:""})}
                postId={post._id}
                />

              }
                </div>
    )
}