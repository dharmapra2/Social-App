import mongoose from "mongoose";
import PostModel from "../Models/postModel.js";
import UserModel from "../Models/userModel.js";

// create a new post
export const createPost = async (req, res, next) => {
  const newPost = new PostModel(req?.body);
  try {
    await newPost.save();
    res.status(201).json({ message: "Post created." });
  } catch (error) {
    next(error);
  }
};

// get all posts
export const getAllPosts = async (req, res, next) => {
  try {
    const allPosts = await PostModel.find({});
    res
      .status(allPosts?.length ? 200 : 404)
      .json(allPosts?.length ? allPosts : { message: "No post is created!." });
  } catch (error) {
    next(error);
  }
};

// get spcific posts
export const getPost = async (req, res, next) => {
  const id = req?.params?.id;
  try {
    const post = await PostModel.findById(id);
    post
      ? res.status(200).json(post)
      : res.status(404).json({ message: "No post is found!." });
  } catch (error) {
    next(error);
  }
};

// update spcific posts
export const updatePost = async (req, res, next) => {
  const id = req?.params?.id;
  const { userId } = req?.body;
  try {
    const post = await PostModel.findById(id);
    if (post && post?.userId === userId) {
      await post.updateOne({ $set: req?.body });
      res.status(200).json({ message: "Post is updated!." });
    } else {
      res.status(403).json({ message: "Action forbidden." });
    }
  } catch (error) {
    next(error);
  }
};

// delete spcific posts
export const deletePost = async (req, res, next) => {
  const id = req?.params?.id;
  const { userId } = req?.body;
  try {
    const post = await PostModel.findById(id);
    if (post && post?.userId === userId) {
      await post.deleteOne();
      res.status(200).json({ message: "Post deleted sucessfully." });
    } else {
      res.status(403).json({ message: "Action forbidden." });
    }
  } catch (error) {
    next(error);
  }
};

// like/dislike a spcific posts
export const likePost = async (req, res, next) => {
  const id = req?.params?.id;
  const { userId } = req?.body;
  try {
    const checkLiked = await PostModel.findById(id);
    if (!checkLiked) {
      throw { status: 404, message: "Action Forbidden!." };
    } else if (!checkLiked?.likes?.includes(userId)) {
      await checkLiked?.updateOne({ $push: { likes: userId } });
      res.status(200).json({ message: "Post is liked." });
    } else {
      await checkLiked.updateOne({ $pull: { likes: userId } });
      res.status(200).json({ message: "Post is disliked." });
    }
  } catch (error) {
    next(error);
  }
};

// get timeline posts
export const getTimelinePosts = async (req, res, next) => {
  const userId = req?.params?.id;
  try {
    const currentUserPosts = await PostModel.find({ userId: userId });
    const followingAllPosts = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);
    res
      .status(200)
      .json(
        currentUserPosts
          .concat(...followingAllPosts[0]?.followingPosts)
          .sort((a, b) => b?.createdAt - a?.createdAt)
      );
  } catch (error) {
    next(error);
  }
};
