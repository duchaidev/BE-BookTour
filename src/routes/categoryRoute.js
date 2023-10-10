const express = require("express");
const categoryController = require("../controllers/categoryController");

const router = express.Router();

router.post("/", categoryController.addCategory);
router.get("/all", categoryController.getAllCategory);
router.delete("/:id", categoryController.deleteCategoryById);
module.exports = router;
