import api from "../main.api";

export const getBlogs=async(pageNo)=>{
const res =  await api.get(`admin/blogs?pageNo=${pageNo}`)
return res.data
}

export const createPost=async(post)=>{
const res =  await api.post(`admin/create`, post)
return res.data
}