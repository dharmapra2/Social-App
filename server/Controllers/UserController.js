import bcrypt from "bcrypt";
import UserModel from "../Models/userModle.js";
import { GlobalData } from "../Utils/BaseData.js";

// get a user
export const getUser = async (req, res) => {
  const userId = req?.params?.id;
  try {
    const user = await UserModel.findById(userId);
    if (user) {
      const { password, isAdmin, ...otherInfo } = user?._doc;
      res.status(200).json(otherInfo);
    } else {
      res.status(404).json({ message: "No Such User Found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Please provide valid user user ID!." });
  }
};

// updateing user
export const updateUser = async (req, res) => {
  const id = req?.params?.id;
  const { currentUserId, currentUserAdminStatus, password } = req?.body;
  try {
    if (id === currentUserId || currentUserAdminStatus) {
      if (password) {
        req.body.password = await bcrypt.hash(password, GlobalData?.saltRounds);
      }
      const userUpdate = await UserModel.findByIdAndUpdate(id, req?.body, {
        /**
         * By default, `findOneAndUpdate()` returns the document as it was **before**
         * `update` was applied. If you set `new: true`, `findOneAndUpdate()` will
         * instead give you the object after `update` was applied.
         */
        new: true,
      });
      res.status(200).json(userUpdate);
    } else {
      const error = new Error(
        "Access Denied!.You can only update your won profile."
      );
      error.status = 403; // Set the status code of the error
      throw error;
    }
  } catch (error) {
    res.status(error?.status || 500).json({ message: error.message });
  }
};
