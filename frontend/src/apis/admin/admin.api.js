import api from "../main.api";

export const getBlogs=async(pageNo)=>{
const res =  await api.get(`admin/blogs?pageNo=${pageNo}`)
return res.data
}

export const createPost=async(post)=>{
    const res =  await api.post(`admin/create`, post)
return res.data
}

export const updatePost=async(post)=>{
const res =  await api.put(`admin/update/${post.postId}`, {title:post.title, description:post.description})
return res.data
}
export const deletePost=async({postId, imgPublicId})=>{
const res =  await api.delete(`admin/delete/${postId}?imgPublicId=${imgPublicId}`)
return res.data
}

export const getAdminBlogs=async(pageNo)=>{
    const res =  await api.get(`admin/adminBlogs?pageNo=${pageNo}`)
    return res.data
}