"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.hasMany(models.Booking, {
        foreignKey: "customerId",
        as: "customerBooking",
      });
      Customer.hasMany(models.Review, {
        foreignKey: "customerId",
        as: "reviewCustomer",
      });
    }
  }
  Customer.init(
    {
      fullName: { type: DataTypes.STRING, allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      phoneNumber: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      // Thêm trường: Ngày sinh
      dateOfBirth: DataTypes.DATE,
      // Thêm trường: Giới tính
      gender: DataTypes.STRING,
      // Thêm trường: Quốc tịch
      nationality: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
