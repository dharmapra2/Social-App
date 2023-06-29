import express from "express";
import { uploadImage } from "../Controllers/UploadController";

const router = express.Router();

router.post("/uploadImage", uploadImage);

export default router;
