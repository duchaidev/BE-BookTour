const postServices = require("../services/postServices");

let postController = {
  getAllPost: async (req, res) => {
    try {
      const posts = await postServices.getAllPostService();
      res.status(200).json(posts);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
  getPostById: async (req, res) => {
    try {
      const post = await postServices.getPostByIdService(req.params.id);
      res.status(200).json(post);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
  createPost: async (req, res) => {
    try {
      const post = await postServices.createPostService(req.body);
      res.status(200).json(post);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
};

module.exports = postController;
