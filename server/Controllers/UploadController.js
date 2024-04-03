import multer from "multer";
import { upload, FILE_UPLOAD_LIMIT } from "../Services/multerService.js";

export const uploadImage = (req, res) => {
  // Flag to track if response has been sent
  let responseSent = false;

  upload.any()(req, res, (err) => {
    if (responseSent) return; // If response has already been sent, exit

    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      if (
        err.code === "LIMIT_FILE_COUNT" ||
        err.code === "LIMIT_UNEXPECTED_FILE"
      ) {
        res.status(400).json({
          error: `Exceeded maximum number of files allowed (${FILE_UPLOAD_LIMIT}).`,
        });
      } else {
        console.log(err);
        res.status(400).json({ message: err.message });
      }
    } else if (err) {
      // Other errors
      res.status(500).json({ message: "Internal server error" });
    } else {
      // Everything went fine.
      res.status(200).json({ message: "Post is updated!" });
    }

    // Set response sent flag
    responseSent = true;
  });
};
