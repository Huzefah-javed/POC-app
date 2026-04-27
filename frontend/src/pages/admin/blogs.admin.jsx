import { toast } from "react-toastify"
import { getBlogs } from "../../apis/admin/admin.api"
import Loader from "../../components/Loader"
import { useFetch } from "../../hooks/useFetch"
import { useState } from "react"
import {Card} from "flowbite-react"

export const BlogPage=()=>{
const [pageNo, setPageNo] = useState(1)

const {data,error,isError,isLoading} = useFetch(()=>getBlogs(pageNo),["AdminBlogs",pageNo])

  if(isLoading) return <Loader/>
  if(isError) toast.error(error)

    console.log(data)

    return (
      <div className="bg-gray-700 w-full">
      <header className="w-full p-3 bg-gray-600 ">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white w-full p-2">Feeds</h1>
      </header>
      {
        data.data.map((post)=>{
          return(

            <Card id={post._id} className="m-2">
         <h2 className="text-2xl font-bold text-gray-900 dark:text-white w-full p-1 ">{post.title}</h2>
         <p className="text-1xl text-gray-900 dark:text-white w-full p-1">{post.description}</p>
        { post.imgUrl &&
          <img className="w-full h-fit" src={post.imgUrl} alt="error" />
        } 
      </Card>
        )
      })
}

      </div>
    )
}