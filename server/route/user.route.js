import { Router } from "express";
import { getUserById } from "../controllers/users.controller.js";

const userRouter = Router();

userRouter.post("/register", getUserById);

export default userRouter;