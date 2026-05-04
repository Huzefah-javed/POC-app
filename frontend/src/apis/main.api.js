import axios from "axios"

const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials: true
})


export const getBlogs=async(pageNo)=>{
const res =  await api.get(`/blogs?pageNo=${pageNo}`)
return res.data
}

export async function login(data){
    const res = await api.post("/login", data)
    return res.data
}

export async function logout(){
    const res = await api.get("/logout")
    return res.data
}



export default api