import { Router } from "express";
import * as userController from "../controllers/user.controller"

const userRouter=Router()

userRouter.get("/users",userController.getuser)


export default userRouter