import mongoose from "mongoose";

export default async function connectMongodb() {
  await mongoose
    .connect(
      // `mongodb+srv://${process.env.MONGODB_CRIDIENTIAL}/?retryWrites=true&w=majority`
      `${process.env.MONGODB_CRIDIENTIAL}`
    )
    .then(() => {
      console.log("MongoDb is connected succesfully");
    })
    .catch((err) => console.error("connection error"));
}
