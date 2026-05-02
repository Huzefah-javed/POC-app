import {Button, Card, FileInput, Label, Textarea, TextInput} from "flowbite-react"
import { useState } from "react"
import { useExecute } from "../hooks/useExecute"
import { createPost } from "../apis/admin/admin.api"
import Loader from "./Loader"
import { toast } from "react-toastify"

export const CreatePost=({onClose})=>{

    const [post, setPost] = useState({
        title:"",
        description:"",
        postPhoto:null
    })


const onSuccess = ()=> toast.success("Post created successfully")
const onError = (error)=> toast.error(error)


const {data,error,isError,isPending,mutate} = useExecute(createPost, onSuccess, onError)

  if(isPending) return <Loader/>
  if(isError) toast.error(error)

const handleSubmit =(e)=>{
    e.preventDefault()
     const formData = new FormData()
     formData.append("title", post.title)
     formData.append("description", post.description)
     formData.append("postPhoto", post.postPhoto)

     mutate(formData)
}

return(

    <div className="w-full h-dvh flex justify-center items-center fixed top-0 left-0 bg-[#0000003b]">
        <Button className=" w-12 h-12 relative -top-[40%] left-[82%] rounded-[50%]" onClick={onClose}>X</Button>
      <form onSubmit={handleSubmit} className="w-[80%]">
        <Card>

           <Label htmlFor="title" >Title</Label>
        <TextInput 
          id="title" 
          type="text" 
          placeholder="Title ...."
          onChange={(e)=>setPost({...post, title:e.target.value})}
          required 
          shadow 
          />
           <Label htmlFor="description" >Title</Label>
        <Textarea
        className="min-h-40"
        id="description" 
        type="text" 
        onChange={(e)=>setPost({...post, description:e.target.value})}
        placeholder="post description"
        required 
        shadow 
        />
           <Label htmlFor="description" >Add media</Label>
            <FileInput
                 onChange={(e)=>setPost({...post, postPhoto:e.target.files[0]})}
            />
            <Button type="submit">Post</Button>
        </Card>
            </form>
      </div>
    )
}