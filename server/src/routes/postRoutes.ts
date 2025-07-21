import express from "express";
const postRouter = express.Router();

import { accessPost, createPost, deletePost, findAllPosts, updatePost} from "../controllers/postController";
import { authGuard } from "../middlewares/authGuard";

postRouter.post("/create/post", authGuard, createPost);
postRouter.get("/list/all/posts", findAllPosts);
postRouter.get("/list/post/:slug", accessPost);
postRouter.delete("/delete/post/:id", authGuard, deletePost);
postRouter.patch("/edit/post/:id", authGuard, updatePost);

export default postRouter;

