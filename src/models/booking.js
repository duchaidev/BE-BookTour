"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.Tour, {
        foreignKey: "tourId",
        as: "tourBooking",
      });
      Booking.belongsTo(models.Customer, {
        foreignKey: "customerId",
        as: "bookingCustomer",
      });
    }
  }
  Booking.init(
    {
      tourId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Tour",
          key: "id",
        },
      },
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Customer",
          key: "id",
        },
      },
      bookingDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      numberOfParticipants: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "PENDING", // Giá trị mặc định khi tạo booking mới
      },
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
