import express from "express";
import { getUser, updateUser } from "../Controllers/UserController.js";

const router = express.Router();

// here we'll get user by thier id
router.get("/:id", getUser);
router.put("/:id", updateUser);

export default router;
