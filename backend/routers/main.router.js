import { Router } from "express";
import { jwtVerification } from "../middlewares/jwtVerification.js";
import { adminRouter } from "./admin.router.js";
import { userRouter } from "./user.router.js";
import { loginController, logoutController } from "../controllers/main.controller.js";

export const mainRouter = Router()

mainRouter.post("/login", loginController)
mainRouter.get("/logout", logoutController)

mainRouter.use("/admin", jwtVerification, adminRouter)
mainRouter.use("/user", jwtVerification, userRouter)