import { deleteFromCloud, uploadToCloud } from "../helpers/cloud.upload.js"
import { roleChecker } from "../helpers/roleChecker.js"
import { createBlog, deleteBlog, getBlogs, updateBlog } from "../models/admin.model.js"
import fs from "fs/promises"

export const createBlogController =async(req, res, next)=>{
    try {
        roleChecker("admin", req.user.role)
    } catch (error) {
        return next({status:401, msg:"Unauthorized route"})
    }
    const {title, description } = req.body
    const urlData = await uploadToCloud(req.file.path)
    if (!urlData) {
       await fs.unlink(req.file.path)
        return next({status:500, msg:"Upload failed, plz try again"})
    }
     const response = await createBlog(title, description, urlData.imgUrl, urlData.imgPublicId, req.user._id)
     fs.unlink(req.file.path)
     if(!response.success) return next({status:response.status, msg:response.msg})
     return res.status(response.status).json({msg:response.msg})
}

export const updateBlogController =async(req, res, next)=>{
    try {
        roleChecker("admin", req.user.role)
    } catch (error) {
        return next({status:401, msg:"Unauthorized route"})
    }
    const {title, description} = req.body
    const { id } = req.params

    const response = await updateBlog(title, description, id)
    if(!response.success) return next({status:response.status, msg:response.msg})
    return res.status(response.status).json({msg:response.msg})
}

export const deleteBlogController =async(req, res, next)=>{
    try {
        roleChecker("admin", req.user.role)
    } catch (error) {
        return next({status:401, msg:"Unauthorized route"})
    }

    const { id } = req.params
    const { imgPublicId } = req.query
    
    const result = await deleteFromCloud(imgPublicId)
    if (!result) {
        return next({status:500, msg:"Delete Operation failed"})
    }
    const response = await deleteBlog(id)
    if(!response.success) return next({status:response.status, msg:response.msg})
    return res.status(response.status).json({msg:response.msg})
}

export const getBlogsController =async(req, res, next)=>{
    try {
        roleChecker("admin", req.user.role)
    } catch (error) {
        return next({status:401, msg:"Unauthorized route"})
    }

    const { pageNo=0 } = req.query

    const response = await getBlogs(pageNo)
    if(!response.success) return next({status:response.status, msg:response.msg})
    return res.status(response.status).json({data:response.data})
}