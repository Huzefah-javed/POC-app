import mongoose from "mongoose"
import { blogs } from "../schemas/blogs.schema.js"


export const createBlog=async(title, description, imgUrl, adminId)=>{
    let response={}
    try {
        const adminObjectId = new mongoose.Types.ObjectId(adminId)
        // console.log("sdfj ",adminObjectId)
       const data = await blogs.create({title, description, imgUrl, adminId:adminObjectId})
        response.success=true
        response.status=201
        response.data=data
        response.msg="Blog created successfully"
        return response
        } catch (error) {
        response.success=false
        response.status=500
        response.msg="something wrong happens while creating blog"
        return response
    }
}