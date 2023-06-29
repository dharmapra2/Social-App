import multer from "multer";

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, "/public/images");
  },
  filename: function (_req, _file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
export const uploadImage = async (_req, _res, _next) => {
  console.log(`uniqueSuffix: ${upload}`);
};
