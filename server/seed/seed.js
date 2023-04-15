import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";
import dotenv from "dotenv";

/* declearing port */
dotenv.config();

mongoose.set("strictQuery", true);

const makeSeed = async () => {
  console.log("==================making Seed==============");
  await mongoose
    .connect(`${process.env.MONGODB_CRIDIENTIAL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "social-app",
      // autoCreate: true,
    })
    .then(async () => {
      console.log("MongoDb is connected succesfully");
      await UserModel.deleteMany();

      const users = [
        {
          userName: "admin@gmail.com",
          email: "user1@gmail.com",
          password: "password1",
          first_name: "Admin",
          last_name: "Admin",
          isAdmin: true,
        },
      ];

      await UserModel.insertMany(users);

      console.log("Data seeded successfully");
    })
    .catch((err) => console.error("Seed Error => ", err));
};
makeSeed();
// In this example, we're connecting to the MongoDB instance running in the Docker container at the URI mongodb://admin:password@mongodb:27017/mydatabase. We're using the mongoose package to connect to the database and seed some sample data.

// Note that we're using the hostname mongodb instead of localhost or 127.0.0.1, because that's the hostname we've given to the MongoDB service in our docker-compose.yml file.
