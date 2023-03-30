import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  getTimelinePosts,
  likePost,
  updatePost,
} from "../Controllers/PostController.js";

const router = express.Router();

router.post("/createPost", createPost);

router.get("/getAllPosts", getAllPosts);
router.get("/:id", getPost);
router.get("/:id/timeline", getTimelinePosts);

router.delete("/:id", deletePost);

router.put("/:id", updatePost);
router.put("/:id/like", likePost);

export default router;
