"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theater extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Theater.hasMany(models.Seat, {
        foreignKey: "theaterid",
        as: "seat",
      });

      Theater.belongsTo(models.TheaterSystem, {
        foreignKey: "theatersysid",
        as: "theatersys",
      });

      Theater.belongsToMany(models.Movie, {
        through: models.ShowTime,
      });
    }
  }
  Theater.init(
    {
      theaterid: DataTypes.INTEGER,
      theatername: DataTypes.STRING,
      theatersysid: DataTypes.INTEGER,
      province: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Theater",
    }
  );
  return Theater;
};
