import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import connectMongodb from "./config/connection.js";
import dotenv from "dotenv";

/* declearing port */
dotenv.config();
const PORT = process.env.APP_PORT || 4000;
const app = express();

mongoose.set('strictQuery', true);

/* bodyParser.json() or express.json() is used for add the built-in JSON body parser to properly add the "body" property to the request object. */
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

/* connecting to mongodb */
await connectMongodb();

app.route("/user/login",)




app.listen(PORT, () => {
    console.log("port is running", PORT);
  });