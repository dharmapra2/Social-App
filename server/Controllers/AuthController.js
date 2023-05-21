import UserModel from "../Models/userModel.js";
import { GlobalData } from "../Utils/BaseData.js";
// Registering a new user
export const registerUser = async (req, res, next) => {
  const { password, first_name, last_name, email } = req.body;
  const hashPassword = await GlobalData?.genrateHashPass(password);
  const newUser = new UserModel({
    password: hashPassword,
    first_name,
    last_name,
    email,
  });
  try {
    const oldUSer = await UserModel.findOne({ email });
    if (oldUSer) {
      res.status(200).json({ message: "Email is already registered.." });
    }
    await newUser.save();
    // const token=jwt
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};
// Login an existing user
export const loginUser = async (req, res, next) => {
  const { email, password, ...props } = req?.body;
  try {
    const searchUser = await UserModel.findOne({ email });
    if (searchUser) {
      const checkPassword = await GlobalData?.comparePass(
        password,
        searchUser?.password
      );
      checkPassword
        ? res.status(200).json({ message: "You Successfully logged in." })
        : res.status(400).json({ message: "Login credential does not match." });
    } else {
      res.status(404).json({ message: "User does not exits." });
    }
  } catch (error) {
    next(error);
  }
};
