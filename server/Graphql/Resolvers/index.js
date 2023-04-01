import PostModel from "../../Models/postModel.js";

export const articles = async () => {
  try {
    const allPosts = await PostModel.find({});
    res
      .status(allPosts?.length ? 200 : 404)
      .json(allPosts?.length ? allPosts : { message: "No post is created!." });
  } catch (error) {
    next(error);
  }
};
