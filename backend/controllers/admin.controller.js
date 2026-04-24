import { uploadToCloud } from "../helpers/cloud.upload.js"
import { roleChecker } from "../helpers/roleChecker.js"
import { createBlog, deleteBlog, updateBlog } from "../models/admin.model.js"
import fs from "fs/promises"

export const createBlogController =async(req, res, next)=>{
    try {
        roleChecker("admin", req.user.role)
    } catch (error) {
        return next({status:401, msg:"Unauthorized route"})
    }
    const {title, description } = req.body
    const url = await uploadToCloud(req.file.path)
    if (!url) {
       await fs.unlink(req.file.path)
        return next({status:500, msg:"Upload failed, plz try again"})
    }
     const response = await createBlog(title, description, url, req.user._id)
     fs.unlinkSync(req.file.path)
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

    const response = await deleteBlog(id)
    if(!response.success) return next({status:response.status, msg:response.msg})
    return res.status(response.status).json({msg:response.msg})
}

export const blogsController =async(req, res, next)=>{
    try {
        roleChecker("admin", req.user.role)
    } catch (error) {
        return next({status:401, msg:"Unauthorized route"})
    }

    const { pageNo } = req.params

    const response = await getBlog(pageNo)
    if(!response.success) return next({status:response.status, msg:response.msg})
    return res.status(response.status).json({msg:response.msg})
}