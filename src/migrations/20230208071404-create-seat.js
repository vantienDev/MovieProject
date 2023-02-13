"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Seats", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      seatid: {
        type: Sequelize.INTEGER,
      },
      seatname: {
        type: Sequelize.STRING,
      },
      seattype: {
        type: Sequelize.STRING,
      },
      theaterid: {
        type: Sequelize.INTEGER,
      },
      booked: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Seats");
  },
};
