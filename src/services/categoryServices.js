const db = require("../models");

let categoryServices = {
  addCategoryService: async (data) => {
    try {
      const { name } = data;
      if (!name) {
        throw new Error("Missing required fields");
      }

      console.log(data);
      await db.Category.create(data);
      return { message: "Add category successfully" };
    } catch (error) {
      throw error;
    }
  },
  getAllCategoryService: async () => {
    try {
      const category = await db.Category.findAll();
      return { category: category, message: "Get category successfully" };
    } catch (error) {
      throw error;
    }
  },
  deleteCategoryByIdService: async (id) => {
    try {
      let category = await db.Category.findByPk(id);
      if (!category) {
        throw { message: "Category not found" };
      }

      category.destroy();
      return { message: "Delete category success" };
    } catch (error) {
      throw error;
    }
  },
};

module.exports = categoryServices;
