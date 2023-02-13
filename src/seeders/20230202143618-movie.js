"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Movies", [
      {
        name: "mrroBot",
        movieid: 1,
        trailer: "https://www.youtube.com/watch?v=xIBiJ_SzJTA",
        image: null,
        description: "is a hacker fiml",
        openingday: new Date("December 17, 1995 03:24:00"),
        evaluate: 10,
        hot: true,
        comingsoon: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Movies", null, {});
  },
};
