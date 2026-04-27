import api from "../main.api";

export const getBlogs=async(pageNo)=>{
const res =  await api.get(`admin/blogs?pageNo=${pageNo}`)
return res.data
}