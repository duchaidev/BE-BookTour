const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

router.get("/", postController.getAllPost);
router.get("/:id", postController.getPostById);
router.post("/", postController.createPost);
router.put("/edit-post/:id", postController.updatePost);

module.exports = router;
