import multer from "multer";

const FILE_UPLOAD_LIMIT = 1;

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, "./public/images/");
  },
  filename: function (_req, file, cb) {
    let fileName = "";
    if (_req?.body?.name) {
      fileName = _req?.body?.name;
    } else {
      const extension = file.originalname?.split(".").pop();
      let temp_file_name = Math.round(Math.random() * 1e9);
      if (_req?.body?.userId) {
        temp_file_name = _req?.body?.userId;
      }
      fileName = Date.now() + "_" + temp_file_name + "." + extension;
    }
    console.log(`fileName:${fileName}`);
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
const upload = multer({
  fileFilter,
  storage,
  limits: {
    files: FILE_UPLOAD_LIMIT, // Limit the number of files
    fileSize: 1024 * 1024 * 5, // 5MB file size limit
  },
});

// Middleware to check the number of files uploaded
const checkFileLimit = (req, res, next) => {
  if (req.files && req.files.length <= FILE_UPLOAD_LIMIT) {
    next();
  } else {
    return res.status(400).json({
      error: `Exceeded maximum number of files allowed (${FILE_UPLOAD_LIMIT}).`,
    });
  }
};

export { upload, checkFileLimit, FILE_UPLOAD_LIMIT };
