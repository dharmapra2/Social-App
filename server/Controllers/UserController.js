import bcrypt from "bcrypt";
import UserModel from "../Models/userModel.js";
import { GlobalData } from "../Utils/BaseData.js";

// get a user
export const getUser = async (req, res, next) => {
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
    next({ message: "Please provide valid user user ID!.", status: 500 });
  }
};

// updateing user
export const updateUser = async (req, res, next) => {
  const id = req?.params?.id;
  const { currentUserId, currentUserAdminStatus, password } = req?.body;
  try {
    if (id === currentUserId || currentUserAdminStatus) {
      if (password) {
        req.body.password = await GlobalData?.genrateHashPass(password);
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
      // Set the status code of the error
      error.status = 403;
      throw error;
    }
  } catch (error) {
    // Pass the error to the error handler middleware
    next(error);
  }
};

// delete user
export const deleteUser = async (req, res, next) => {
  const id = req?.params?.id;
  const { currentUserId, currentUserAdminStatus } = req?.body;
  try {
    if (id === currentUserId || currentUserAdminStatus) {
      const result = await UserModel.findByIdAndDelete(id);
      res.status(result ? 200 : 404).json({
        message: result
          ? "User acccount is deleted sucessfully."
          : "No user is found.",
      });
    } else {
      const error = new Error(
        "Access Denied!.You can only delete your won profile."
      );
      // Set the status code of the error
      error.status = 403;
      throw error;
    }
  } catch (error) {
    // Pass the error to the error handler middleware
    next(error);
  }
};

// follow user
export const followUsers = async (req, res, next) => {
  const id = req?.params?.id;
  const { currentUserId } = req?.body;
  if (id === currentUserId) {
    res.status(403).json({ message: "Action forbidden." });
  } else {
    try {
      const followerUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);
      if (!followerUser?.followers?.includes(currentUserId)) {
        await followerUser?.updateOne({
          $push: { followers: currentUserId },
        });
        await followingUser?.updateOne({
          $push: { following: id },
        });
        res.status(200).json({ message: "User followed." });
      } else {
        res.status(403).json({ message: "User is alredy following you." });
      }
    } catch (error) {
      // Pass the error to the error handler middleware
      next(error);
    }
  }
};

// unfollow user
export const unfollowUsers = async (req, res, next) => {
  const id = req?.params?.id;
  const { currentUserId } = req?.body;
  if (id === currentUserId) {
    res.status(403).json({ message: "Action forbidden." });
  } else {
    try {
      const followerUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);
      if (followerUser?.followers?.includes(currentUserId)) {
        await followerUser?.updateOne({
          $pull: { followers: currentUserId },
        });
        await followingUser?.updateOne({
          $pull: { following: id },
        });
        res.status(200).json({ message: "User unfollowed." });
      } else {
        res.status(403).json({ message: "User is not followed by you." });
      }
    } catch (error) {
      // Pass the error to the error handler middleware
      next(error);
    }
  }
};
