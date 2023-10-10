const db = require("../models");
let postServices = {
  getAllPostService: async () => {
    try {
      const posts = await db.Post.findAll();
      return { posts: posts, message: "Get all posts successfully" };
    } catch (e) {
      throw e;
    }
  },
  getPostByIdService: async (id) => {
    try {
      const post = await db.Post.findOne({
        where: { id: id },
      });
      return { post: post, message: "Get post by id successfully" };
    } catch (e) {
      throw e;
    }
  },
  createPostService: async (post) => {
    try {
      const { title, content } = post;
      if (!title || !content) {
        throw { statusCode: 400, message: "Title and content are required" };
      }
      const newPost = await db.Post.create({
        title: title,
        content: content,
        author: post?.author || "Anonymous",
        category: post?.category || "Other",
        trending: post?.trending || false,
      });
      return { post: newPost, message: "Create post successfully" };
    } catch (e) {
      throw e;
    }
  },
};

module.exports = postServices;
