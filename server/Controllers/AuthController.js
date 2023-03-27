import UserModel from "../Models/userModle.js";

// Registering a new user
export const registerUser = async (req, res) => {
  console.log("req", req?.body);
  const { userName, password, first_name, last_name, email } = req.body;
  const newUser = new UserModel({
    userName,
    password,
    first_name,
    last_name,
    email,
  });
  try {
    await newUser.save();
    console.log(newUser);
    res.status(200).json(newUser);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error.message });
  }
};
