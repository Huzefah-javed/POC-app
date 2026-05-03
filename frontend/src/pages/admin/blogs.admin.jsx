import { toast } from "react-toastify"
import { getBlogs } from "../../apis/admin/admin.api"
import Loader from "../../components/Loader"
import { useFetch } from "../../hooks/useFetch"
import { useState } from "react"
import {Avatar, Badge, Button, Card, Pagination} from "flowbite-react"
import { UpdatePost } from "../../components/UpdatePost"
import { CreatePost } from "../../components/CreatePost.admin"

export const BlogPage=()=>{
const [pageNo, setPageNo] = useState(1)


const [createPostMode, setCreatePostMode] = useState(false)

const {data,error,isError,isLoading} = useFetch(()=>getBlogs(pageNo),["blogs",pageNo])

  if(isLoading) return <Loader/>
  if(isError) toast.error(deleteBlog.error)

 const handlePageChange = (pageNumber) => {
                setPageNo(pageNumber); 
            };

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
      </Card>
        )
      })
}
    
    {
      createPostMode &&
      <CreatePost
      onClose={()=>setCreatePostMode(false)}
      />

    }

          <Pagination
            className="text-center my-12" 
      currentPage={pageNo} 
      totalPages={data?.data?.length === 10 ? pageNo + 1 : pageNo} 
      onPageChange={handlePageChange} 
    />
      </div>
    )
}