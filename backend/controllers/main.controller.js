import { assignJWTCookie } from "../jwt/authCookie.js"
import { getBlogs, login } from "../models/main.model.js"

export const loginController=async(req, res, next)=>{
    const {email,password, role} = req.body
    const response = await login(email, password, role)
    console.log("response: ",response)
    if (!response.success) return next({status:response.status, msg:response.msg})
    assignJWTCookie(response.data, res)
   return res.status(response.status).json({msg:response.msg, data:response.data})
}

export const logoutController=async(req, res, next)=>{
    res.clearCookie("authCookie")
   return res.json({msg:"logout successfully"})
}

export const getBlogsController =async(req, res, next)=>{

    const { pageNo=0 } = req.query

    const response = await getBlogs(pageNo)
    if(!response.success) return next({status:response.status, msg:response.msg})
    return res.status(response.status).json({data:response.data})
}