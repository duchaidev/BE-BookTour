const categoryServices = require("../services/categoryServices");

let categoryController = {
  addCategory: async (req, res) => {
    try {
      let category = await categoryServices.addCategoryService(req.body);
      res.status(200).json(category);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
  getAllCategory: async (req, res) => {
    try {
      let category = await categoryServices.getAllCategoryService();
      res.status(200).json(category);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
  deleteCategoryById: async (req, res) => {
    try {
      let category = await categoryServices.deleteCategoryByIdService(
        req.params.id
      );
      res.status(200).json(category);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
};

module.exports = categoryController;
