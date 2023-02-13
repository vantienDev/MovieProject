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

    return queryInterface.bulkInsert("TheaterSystems", [
      {
        theatersysid: 1,
        theatersysname: "CGV",
        theatersyslogo:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.cgv.id%2F&psig=AOvVaw2L25PdDOmIjawSs8L90PxQ&ust=1675928458881000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCmqZW2hf0CFQAAAAAdAAAAABAg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theatersysid: 2,
        theatersysname: "LOTTE",
        theatersyslogo:
          "https://static.mservice.io/cinema/momo-upload-api-221108100132-638034984925107129.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theatersysid: 3,
        theatersysname: "BHD",
        theatersyslogo:
          "https://img.mservice.io/momo_app_v2/new_version/img/THAO.MAI/DcineLogo.png",
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
