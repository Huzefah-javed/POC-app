import { Router } from "express";
import { getBlogsController } from "../controllers/user.controller.js";

export const userRouter =Router()

userRouter.get("/blogs/:pageNo", getBlogsController)