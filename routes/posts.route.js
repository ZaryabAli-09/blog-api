import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import {
  create,
  getPosts,
  deletePost,
  editPost,
} from "../controllers/posts.controller.js";
const router = express.Router();

router.post("/create", verifyUser, create);
router.get("/getposts", getPosts);
router.delete("/deletepost/:postId/:userId", verifyUser, deletePost);
router.put("/editpost/:postId/:userId", verifyUser, editPost);

export default router;
