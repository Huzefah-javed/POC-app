import { Router } from "express";
import { createBlogController, deleteBlogController, getAdminsBlogsController, getBlogsController, updateBlogController } from "../controllers/admin.controller.js";
import { upload } from "../middlewares/multer.js";

export const adminRouter =Router()

// adminRouter.get("/dashboardDetails")
adminRouter.post("/create", upload.single('postPhoto') ,createBlogController)
adminRouter.put("/update/:id", updateBlogController)
adminRouter.delete("/delete/:id", deleteBlogController)
adminRouter.get("/blogs", getBlogsController)
adminRouter.get("/adminBlogs", getAdminsBlogsController)