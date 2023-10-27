const db = require("../models");
const slugify = require("slugify");
const crypto = require("crypto");
const { Op } = require("sequelize");

let tourServices = {
  createSlug: async (title) => {
    let slug = slugify(title, {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
    });
    let randomString = crypto.randomBytes(4).toString("hex");
    let fullSlug = `${randomString}-${slug}`;

    // Kiểm tra xem slug đã tồn tại chưa
    let existingProduct = await db.Tour.findOne({
      where: { slug: fullSlug },
    });
    while (existingProduct) {
      // Nếu slug đã tồn tại, tiếp tục tạo slug mới và kiểm tra lại
      randomString = crypto.randomBytes(4).toString("hex");
      fullSlug = `${slug}-${randomString}`;
      existingProduct = await db.Tour.findOne({
        where: { slug: fullSlug },
      });
    }
    return fullSlug;
  },

  getAllTourService: async () => {
    try {
      let tours = await db.Tour.findAll();
      return tours;
    } catch (error) {
      throw error;
    }
  },
  getOneTourService: async (id) => {
    console.log(id);
    try {
      if (!id) {
        throw { message: "Missing required fields" };
      }
      let tour = await db.Tour.findOne({
        where: { [Op.or]: [{ id: id }, { slug: id }] },
      });
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
      const { name, price, image, description } = data;
      if (!name || !price || !image || !description) {
        throw { message: "Missing required fields" };
      }
      let slug = await tourServices.createSlug(name);
      await db.Tour.create({
        ...data,
        slug,
      });
      return { message: "Create tour successfully" };
    } catch (error) {
      throw error;
    }
  },
  updateTourService: async (data, id) => {
    console.log(id);
    try {
      let tour = await db.Tour.findByPk(id);
      if (!tour) {
        throw { message: "Tour not found" };
      }
      // console.log(tour);
      const { slug, ...other } = data;
      // console.log(data);
      tour.update(
        {
          ...other,
        },
        { where: { id: id } }
      );
      return data;
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
