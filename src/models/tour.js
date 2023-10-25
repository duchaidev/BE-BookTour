"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    static associate(models) {
      Tour.hasMany(models.Booking, {
        foreignKey: "tourId",
        as: "tourBooking",
      });
      Tour.hasMany(models.Review, {
        foreignKey: "tourId",
        as: "tourReview",
      });
    }
  }
  Tour.init(
    {
      slug: { type: DataTypes.STRING, allowNull: false, unique: true },
      category: DataTypes.STRING, // Thêm phân loại (category)
      description: DataTypes.BLOB("long"),
      difficulty: DataTypes.STRING, // Độ khó của tour
      duration: DataTypes.STRING, // Thời gian tour
      hotelAddress: DataTypes.STRING, // Thêm địa chỉ khách sạn
      hotelName: DataTypes.STRING, // Thêm tên khách sạn
      image: DataTypes.BLOB("long"),
      itinerary: DataTypes.STRING, // Lộ trình của tour
      maxGroupSize: DataTypes.INTEGER, // Số lượng người tối đa trong 1 nhóm
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      startDates: DataTypes.DATE, // Thêm ngày bắt đầu tour
      tourConditions: DataTypes.STRING, // Điều kiện của tour
      vehicleType: DataTypes.STRING, // Thêm loại phương tiện (xe máy, ô tô, ...)
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tour",
    }
  );
  return Tour;
};
