import mongoose from "mongoose";

export default async function connectMongodb() {
  await mongoose
    .connect(`${process.env.MONGODB_CRIDIENTIAL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "social-app",
      // autoCreate: true,
    })
    .then(() => {
      console.log("MongoDb is connected succesfully");
    })
    .catch((err) => console.error("connection error", err));
}
