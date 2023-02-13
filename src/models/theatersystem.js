"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TheaterSystem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TheaterSystem.hasMany(models.Theater, {
        foreignKey: "theatersysid",
        as: "theater",
      });
    }
  }
  TheaterSystem.init(
    {
      theatersysid: DataTypes.INTEGER,
      theatersysname: DataTypes.STRING,
      theatersyslogo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TheaterSystem",
    }
  );
  return TheaterSystem;
};
