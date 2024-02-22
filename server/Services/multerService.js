import multer from "multer";

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, "./public/images/");
  },
  filename: function (_req, file, cb) {
    const extension = file.originalname?.split(".").pop();
    let temp_file_name = Math.round(Math.random() * 1e9);
    if (_req?.body?.userId) {
      temp_file_name = _req?.body?.userId;
    }
    const fileName = Date.now() + "_" + temp_file_name + "." + extension;

    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Use 'array' for multiple files
const upload = multer({ storage, fileFilter });
export default upload;
