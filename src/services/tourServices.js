const db = require("../models");

let tourServices = {
  getAllTourService: async () => {
    try {
      let tours = await db.Tour.findAll();
      return tours;
    } catch (error) {
      throw error;
    }
  },
  getOneTourService: async (id) => {
    try {
      if (!id) {
        throw { message: "Missing required fields" };
      }
      let tour = await db.Tour.findByPk(id);
      if (!tour) {
        throw { message: "Tour not found" };
      }
      return tour;
    } catch (error) {
      throw error;
    }
  },
  createTourService: async (data) => {
    try {
      const { name, price, images, description } = data;
      if (!name || !price || !images || !description) {
        throw { message: "Missing required fields" };
      }
      await db.Tour.create(data);
      return { message: "Create tour successfully" };
    } catch (error) {
      throw error;
    }
  },
  updateTourService: async (data, id) => {
    try {
      let tour = await db.Tour.findByPk(id);
      if (!tour) {
        throw { message: "Tour not found" };
      }
      tour.update(data);
      return tour;
    } catch (error) {
      throw error;
    }
  },
  deleteTourService: async (id) => {
    try {
      let tour = await db.Tour.findByPk(id);
      if (!tour) {
        throw { message: "Tour not found" };
      }

      tour.destroy();
      return { message: "Delete tour success" };
    } catch (error) {
      throw error;
    }
  },
};

module.exports = tourServices;
