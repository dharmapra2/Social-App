import UserModel from "../Models/userModle.js";

// get a user
export const getUser = async (req, res) => {
  const userId = req?.params?.id;
  try {
    const user = await UserModel.findById(userId);
    if (user) {
      const { password, isAdmin, ...otherInfo } = user?._doc;
      res.status(200).json(otherInfo);
    } else {
      res.status(404).json({ message: "No user found." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
