import { roleChecker } from "../helpers/roleChecker.js"
import { createBlog } from "../models/admin.model.js"

export const createBlogController =async(req, res, next)=>{
    try {
        roleChecker("admin", req.user.role)
    } catch (error) {
        return next({status:401, msg:"Unauthorized route"})
    }
    const {title, description, imgUrl=""} = req.body

    const response = await createBlog(title, description, imgUrl, req.user._id)
    if(!response.success) return next({status:response.status, msg:response.msg})
    return res.status(response.status).json({msg:response.msg})
}