import express from "express";
import { getUser } from "../Controllers/UserController.js";

const router = express.Router();

// here we'll get user by thier id
router.get("/:id", getUser);

export default router;
