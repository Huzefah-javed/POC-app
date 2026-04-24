

export const getBlogs=async(pageNo)=>{
    let response={}
    try {
        const skip = (pageNo-1)*10
            const data = await blogs.find().sort({_id:-1}).skip(skip)
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