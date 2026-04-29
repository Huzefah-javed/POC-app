import { Button, Card, Label, Textarea, TextInput } from "flowbite-react"
import { useState } from "react"
import { useExecute } from "../hooks/useExecute"
import { updatePost } from "../apis/admin/admin.api"
import Loader from "./Loader"
import { toast } from "react-toastify"

export const UpdatePost=({currentTitle, currentDescription, postId, onClose})=>{

    const [post, setPost] = useState({
        title:currentTitle,
        description:currentDescription,
        postId
    })
    const onSuccess = ()=> toast.success("Post updated successfully")
    const onError = ()=> toast.error("Post updated failed")
    
const {data,error,isError,isPending,mutate}= useExecute(updatePost, onSuccess, onError)

if(isPending) return <Loader/>
if(isError) toast.error(error)



const handleSubmit =(e)=>{
    e.preventDefault()
    mutate(post)
    onClose()
}

    return(
            <div className="w-full h-dvh flex justify-center items-center fixed top-0 left-0 bg-[#0000003b]">
             <div className="bg-gray-700 w-[80%] h-[80%]">
                  <header className="w-full p-3 bg-gray-600 flex justify-around">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white w-full p-2">Update post</h1>
                    <Button onClick={onClose}>Close</Button>
                  </header>
                        <form onSubmit={handleSubmit}>
                    <Card>
            
                       <Label htmlFor="title" >Title</Label>
                    <TextInput 
                      id="title" 
                      type="text" 
                      placeholder="Title ...."
                      value={post.title}
                      onChange={(e)=>setPost({...post, title:e.target.value})}
                      required 
                      shadow 
                      />

                       <Label htmlFor="description" >Description</Label>
                    <Textarea
                    className="min-h-40"
                    id="description" 
                    value={post.description}
                    type="text" 
                    onChange={(e)=>setPost({...post, description:e.target.value})}
                    placeholder="post description"
                    required 
                    shadow 
                    />
                    <Button type="submit">Update Post</Button>
                    </Card>
                        </form>
                  </div>
                </div>
     )
}