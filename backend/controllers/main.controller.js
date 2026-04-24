import { assignJWTCookie } from "../jwt/authCookie.js"
import { login } from "../models/main.model.js"

export const loginController=async(req, res, next)=>{
    const {email,password, role} = req.body
    const response = await login(email, password, role)
    console.log("response: ",response)
    if (!response.success) return next({status:response.status, msg:response.msg})
    assignJWTCookie(response.data, res)
   return res.status(response.status).json({msg:response.msg})
}

export const logoutController=async(req, res, next)=>{
    res.clearCookie("authCookie")
   return res.json({msg:"logout successfully"})
}