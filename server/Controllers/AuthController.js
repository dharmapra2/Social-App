import UserModel from "../Models/userModel.js";
import { GlobalData } from "../Utils/BaseData.js";

// Registering a new user
export const registerUser = async (req, res, next) => {
  const { userName, password, first_name, last_name, email } = req.body;
  const hashPassword = await GlobalData?.genrateHashPass(password);
  const newUser = new UserModel({
    userName,
    password: hashPassword,
    first_name,
    last_name,
    email,
  });
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};
// Login an existing user
export const loginUser = async (req, res, next) => {
  const { userName, password, ...props } = req?.body;
  // console.log(req);
  try {
    const searchUser = await UserModel.findOne({ userName });
    if (searchUser) {
      const checkPassword = await GlobalData?.comparePass(
        password,
        searchUser?.password
      );
      checkPassword
        ? res.status(200).json(searchUser)
        : res.status(400).json({ message: "Login credential does not match." });
    } else {
      res.status(404).json({ message: "User does not exits." });
    }
  } catch (error) {
    next(error);
  }
};
