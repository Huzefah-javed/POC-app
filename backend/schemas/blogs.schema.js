import { model, Schema } from "mongoose";

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
    },
    imgPublicId:{
        type:String,
    },
   adminId:{
    type: Schema.Types.ObjectId,
    required:true
   }
})

export const blogs = model("blog", blogSchema)