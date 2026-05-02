import { toast } from "react-toastify"
import { deletePost, getBlogs } from "../../apis/admin/admin.api"
import Loader from "../../components/Loader"
import { useFetch } from "../../hooks/useFetch"
import { useState } from "react"
import {Avatar, Badge, Button, Card} from "flowbite-react"
import { UpdatePost } from "../../components/UpdatePost"
import { useExecute } from "../../hooks/useExecute"
import { CreatePost } from "../../components/CreatePost.admin"

export const BlogPage=()=>{
const [pageNo, setPageNo] = useState(1)
const [updatedPost, setUpdatedPost] = useState({
  title:"", description:"", postId:""                                                       
})

const [createPostMode, setCreatePostMode] = useState(false)

const {data,error,isError,isLoading} = useFetch(()=>getBlogs(pageNo),["blogs",pageNo])

const onSuccess = ()=> toast.success("Post deleted successfully")
const onError = ()=> toast.error("Post deletion operation failed")

const deleteBlog = useExecute(deletePost, onSuccess, onError) 

  if(isLoading || deleteBlog.isPending) return <Loader/>
  if(isError ||deleteBlog.isError) toast.error(deleteBlog.error)

    
const user = localStorage.getItem("userInfo")
const userInfo = JSON.parse(user)

const handleUpdate=(post)=>{
  setUpdatedPost({title:post.title, description:post.description, postId:post._id})
}

const handleDelete=(post)=>{
deleteBlog.mutate({postId:post._id, imgPublicId:post.imgPublicId})  
}

return (
      <div className="bg-gray-700 w-full">
      <header className="flex justify-between items-center w-full p-3 bg-gray-600 ">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white w-full p-2">Feeds</h1>
      <Button onClick={()=> setCreatePostMode(true)} color="blue" className="text-center">Create Post</Button>
      </header>
      {
        data.data.map((post)=>{
          return(

            <Card id={post._id} className="m-2">
            <div className="flex items-center gap-1 rounded-lg">
      <Avatar 
        rounded 
        size="sm"  
      />

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white">{post.admin.name}</h2>
          <Badge color="info" size="sm">
            {post.admin.role}
          </Badge>
        </div>

        <p className="text-sm text-gray-500 font-medium">{post.admin.email}</p>
      </div>
    </div>
         <h2 className="text-2xl font-bold text-gray-900 dark:text-white w-full p-1 ">{post.title}</h2>
         <p className="text-1xl text-gray-900 dark:text-white w-full p-1">{post.description}</p>
        { post.imgUrl &&
          <img className="w-full max-h-1/2" src={post.imgUrl} alt="error" />
        } 
      {userInfo?.role ? (
        <div className="w-full flex items-center justify-start gap-4">
        <Button onClick={()=>handleUpdate(post)} color="green">Update</Button>
        <Button onClick={()=>handleDelete(post)} color="red">Delete</Button>
        </div>
      ):""}
      </Card>
        )
      })
}
    {
      (updatedPost.postId && updatedPost.title && updatedPost.description)
       &&  
      <UpdatePost 
      currentTitle={updatedPost.title}
      currentDescription={updatedPost.description}
      postId={updatedPost.postId}
      onClose={()=>setUpdatedPost({title:"", description:"", postId:""})}
      />
    }
    {
      createPostMode &&
      <CreatePost
      onClose={()=>setCreatePostMode(false)}
      />

    }
      </div>
    )
}