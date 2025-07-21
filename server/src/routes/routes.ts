import express from "express";
const router = express.Router();

//Rotas
import userRouter from "./userRoutes";

//Config.
router.use("/api/users", userRouter);

export default router;