import express from "express";

const router = express.Router();

router.post("/get", async (res, req) => {
  res.status(200).json("don");
});

export default router;
