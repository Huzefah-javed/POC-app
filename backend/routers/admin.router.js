import { Router } from "express";
import { createBlogController } from "../controllers/admin.controller.js";

export const adminRouter =Router()

// adminRouter.get("/dashboardDetails")
adminRouter.post("/create", createBlogController)
// adminRouter.put("/update/:id")
// adminRouter.delete("/delete/:id")
// adminRouter.get("/blogs/:pageNo")