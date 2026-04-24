import { Router } from "express";
import { getBlogsController } from "../controllers/user.controller";

export const userRouter =Router()

userRouter.get("/blogs/:pageNo", getBlogsController)