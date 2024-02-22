import mongoose from "mongoose";

export default async function connectMongodb() {
  await mongoose
    .connect(`${process.env.MONGODB_CRIDIENTIAL}`, {
      socketTimeoutMS: 1000,
      dbName: "social-app",
    })
    .then(() => {
      console.log("MongoDb is connected succesfully");
    })
    .catch((err) => console.error("connection error", err));
}
