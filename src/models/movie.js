"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.hasMany(models.Banner, {
        foreignKey: "movieid",
        as: "banner",
      });

      Movie.belongsToMany(models.Theater, {
        through: models.ShowTime,
      });
    }
  }
  Movie.init(
    {
      movieid: DataTypes.INTEGER,
      name: DataTypes.STRING,
      trailer: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      openingday: DataTypes.DATE,
      evaluate: DataTypes.INTEGER,
      hot: DataTypes.BOOLEAN,
      comingsoon: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
