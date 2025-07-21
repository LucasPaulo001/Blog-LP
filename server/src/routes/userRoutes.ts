import express from "express";
const userRouter = express.Router();

import { login, profile, register } from "../controllers/userController";
import { loginValidations, registerValidations } from "../middlewares/userValidations";
import { validation } from "../middlewares/handleValidations";
import { authGuard } from "../middlewares/authGuard";

userRouter.post("/register", registerValidations(), validation, register);
userRouter.post("/login",loginValidations(), validation, login);
userRouter.get("/profile", authGuard, profile);

export default userRouter;