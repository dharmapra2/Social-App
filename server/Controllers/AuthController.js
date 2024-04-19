import UserModel from "../Models/userModel.js";
import { GlobalData } from "../Utils/BaseData.js";
import jwt from "jsonwebtoken";
// Registering a new user
export const registerUser = async (req, res, next) => {
  const { password, first_name, last_name, userName } = req.body;
  const hashPassword = await GlobalData?.genrateHashPass(password);
  const registerNewUser = new UserModel({
    password: hashPassword,
    first_name,
    last_name,
    userName,
  });
  try {
    const oldUSer = await UserModel.findOne({ userName });
    if (oldUSer) {
      return res
        .status(200)
        .json({ message: "User Name is already registered.." });
    }
    const newUser = await registerNewUser.save();
    const token = jwt.sign(
      {
        userName: newUser?.userName,
        id: newUser._id,
      },
      process.env.JWT_TOKEN,
      { expiresIn: "1h" }
    );
    return res.status(200).json({ user: newUser, token });
  } catch (error) {
    next(error);
  }
};
// Login an existing user
export const loginUser = async (req, res, next) => {
  const { userName, password, ...props } = req?.body;
  try {
    const searchUser = await UserModel.findOne({ userName });
    if (searchUser) {
      const checkPassword = await GlobalData?.comparePass(
        password,
        searchUser?.password
      );
      if (!checkPassword) {
        return res
          .status(400)
          .json({ message: "Login credential does not match." });
      }
      const token = jwt.sign(
        {
          userName: searchUser?.userName,
          id: searchUser._id,
        },
        process.env.JWT_TOKEN,
        { expiresIn: "1h" }
      );
      return res
        .status(200)
        .json({
          message: "You Successfully logged in.",
          user: searchUser,
          token,
        });
    } else {
      return res.status(404).json({ message: "User does not exits." });
    }
  } catch (error) {
    next(error);
  }
};
