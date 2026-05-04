import { blogs } from "../schemas/blogs.schema.js"
import { users } from "../schemas/users.schema.js"

export const login=async(email, password, role)=>{
    let response = {}
    try {
       const data = await users.findOne({email, password, role}, {_id:1,email:1, name:1, role:1})
       if (!data) {
           response.msg="No user found with this email or password !!"
           response.status=404
            response.success=false
            return response
       }
       response.data=data
       response.msg="Login successful !!"
       response.status=200
       response.success=true
       return response

    } catch (error) {
         response.msg="Login failed !!"
           response.status=500
            response.success=false
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