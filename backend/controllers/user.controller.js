import { getBlogs } from "../models/user.model.js"


export const getBlogsController =async(req, res, next)=>{
    try {
        roleChecker("user", req.user.role)
    } catch (error) {
        return next({status:401, msg:"Unauthorized route"})
    }

    const { pageNo=0 } = req.query

    const response = await getBlogs(pageNo)
    if(!response.success) return next({status:response.status, msg:response.msg})
    return res.status(response.status).json({data:response.data})
}