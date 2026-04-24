import cloudinary from "../configs/cloudinary.config.js";

export const uploadToCloud =async(filePath)=>{
    try {
        const result =  await cloudinary.uploader.upload(filePath)
        return result.secure_url
    } catch (error) {
        return false
    }

}

