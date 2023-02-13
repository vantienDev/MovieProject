"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Seat.belongsTo(models.Theater, {
        foreignKey: "theaterid",
        as: "theater",
      });
    }
  }
  Seat.init(
    {
      seatid: DataTypes.INTEGER,
      seatname: DataTypes.STRING,
      seattype: DataTypes.STRING,
      theaterid: DataTypes.INTEGER,
      booked: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Seat",
    }
  );
  return Seat;
};
