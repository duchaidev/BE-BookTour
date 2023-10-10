"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tours", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category: {
        // Thêm phân loại (category)
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.BLOB("long"),
      },
      difficulty: {
        // Độ khó của tour
        type: Sequelize.STRING,
      },
      duration: {
        // Thời gian tour
        type: Sequelize.STRING,
      },
      hotelAddress: {
        // Thêm địa chỉ khách sạn
        type: Sequelize.STRING,
      },
      hotelName: {
        // Thêm tên khách sạn
        type: Sequelize.STRING,
      },
      images: {
        type: Sequelize.STRING,
      },
      itinerary: {
        // Lộ trình của tour
        type: Sequelize.STRING,
      },
      maxGroupSize: {
        // Số lượng người tối đa trong 1 nhóm
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      startDates: {
        // Thêm ngày bắt đầu tour
        type: Sequelize.STRING,
      },
      tourConditions: {
        // Điều kiện của tour
        type: Sequelize.STRING,
      },
      vehicleType: {
        // Thêm loại phương tiện (xe máy, ô tô, ...)
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tours");
  },
};