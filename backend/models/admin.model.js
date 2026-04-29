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
            console.log(error)
        response.success=false
        response.status=500
        response.msg="something wrong happens while creating blog"
        return response
    }
}

export const updateBlog=async(title, description, blogId)=>{
    let response={}
    try {
        const blogObjectId = new mongoose.Types.ObjectId(blogId)
            await blogs.updateOne({_id:blogObjectId},{title, description})
        response.success=true
        response.status=200
        response.msg="Blog updated successfully"
        return response
        } catch (error) {
            console.log(error)
        response.success=false
        response.status=500
        response.msg="something wrong happens while updating blog"
        return response
    }
}

export const deleteBlog=async(blogId)=>{
    let response={}
    try {
        const blogObjectId = new mongoose.Types.ObjectId(blogId)
          const data =  await blogs.findByIdAndDelete(blogObjectId)
        response.success=true
        response.status=200
        response.msg="Blog deleted successfully"
        response.data = data
        return response
        } catch (error) {
        response.success=false
        response.status=500
        response.msg="something wrong happens while deleting blog"
        return response
    }
}

export const getBlogs=async(pageNo)=>{
    let response={}
    try {
        const skip = (pageNo-1)*10
            const data = await blogs.aggregate([
                {
                    $lookup:{
                        from:"users",
                        foreignField:"_id",
                        localField:"adminId",
                        as:"admin"
                    }
                },
                {$unwind:"$admin"},
                {
                    $project:{
                        "admin.password":0,
                        "admin.email":0,
                    }
                }
            ]).sort({_id:-1}).skip(skip).limit(10)
        response.success=true
        response.status=200
        response.data=data
        return response
        } catch (error) {
            console.log(error)
        response.success=false
        response.status=500
        response.msg="something wrong happens while fetching blog"
        return response
    }
}