import multer from "multer";
import upload from "../Services/multerService.js";

export const uploadImage = (req, res) => {
  upload.any()(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.status(400).json({ message: err.message });
    } else if (err) {
      // Other errors
      res.status(500).json({ message: "Internal server error" });
    }
    // Everything went fine.
    res.status(200).json({ message: "Post is updated!" });
  });
};
