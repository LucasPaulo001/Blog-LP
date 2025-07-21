import express from "express";
const router = express.Router();

//Rotas
import userRouter from "./userRoutes";
import postRouter from "./postRoutes";

//Config.
router.use("/api/users", userRouter);
router.use("/api/posts", postRouter);

export default router;