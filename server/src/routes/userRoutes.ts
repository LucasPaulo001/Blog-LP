import express from "express";
const userRouter = express.Router();

import { register } from "../controllers/userController";
import { registerValidations } from "../middlewares/userValidations";
import { validation } from "../middlewares/handleValidations";

userRouter.post("/register", registerValidations(), validation, register);

export default userRouter;