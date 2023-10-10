"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.Tour, {
        foreignKey: "tourId",
        as: "tourReview",
      });
      Review.belongsTo(models.Customer, {
        foreignKey: "customerId",
        as: "reviewCustomer",
      });
    }
  }
  Review.init(
    {
      tourId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comment: {
        type: DataTypes.BLOB("long"),
      },
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
