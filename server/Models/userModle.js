import mongoose from "mongoose";

// Define a schema for a user
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
    livesIn: String,
    worksAt: String,
    relationshipStatus: String,
    followers: [],
    following: [],
  },
  { timestamps: true }
);

// Define a model for the user schema
const UserModel = mongoose.model("Users", userSchema);

// Export the model for use in other files
export default UserModel;
