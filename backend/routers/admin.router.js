import { Router } from "express";
import { createBlogController, deleteBlogController, updateBlogController } from "../controllers/admin.controller.js";

export const adminRouter =Router()

// adminRouter.get("/dashboardDetails")
adminRouter.post("/create", createBlogController)
adminRouter.put("/update/:id", updateBlogController)
adminRouter.delete("/delete/:id", deleteBlogController)
adminRouter.get("/blogs/:pageNo", blogsController)