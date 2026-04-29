import cloudinary from "../configs/cloudinary.config.js";

export const uploadToCloud =async(filePath)=>{
    try {
        const result =  await cloudinary.uploader.upload(filePath)
        return {imgUrl:result.secure_url, imgPublicId:result.public_id}
    } catch (error) {
        return false
    }
}

export const deleteFromCloud =async(imgPublicId)=>{
        try {
             await cloudinary.uploader.destroy(imgPublicId)
             return true
        } catch (error) {
            return false
        }
}

