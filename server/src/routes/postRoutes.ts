import express from "express";
const postRouter = express.Router();

import { accessPost, createPost, findAllPosts} from "../controllers/postController";
import { authGuard } from "../middlewares/authGuard";

postRouter.post("/create/post", authGuard, createPost);
postRouter.get("/list/all/posts", findAllPosts);
postRouter.get("/list/post/:slug", accessPost);

export default postRouter;

