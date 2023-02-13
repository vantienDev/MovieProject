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
    return queryInterface.bulkInsert("Seats", [
      {
        seatid: 1,
        seatname: "A1",
        seattype: "thường",
        theaterid: 1,
      },
      {
        seatid: 2,
        seatname: "A2",
        seattype: "thường",
        theaterid: 1,
      },
      {
        seatid: 3,
        seatname: "A3",
        seattype: "vip",
        theaterid: 1,
      },
      {
        seatid: 4,
        seatname: "A4",
        seattype: "thường",
        theaterid: 1,
      },
      {
        seatid: 5,
        seatname: "A5",
        seattype: "thường",
        theaterid: 1,
      },

      {
        seatid: 6,
        seatname: "A1",
        seattype: "thường",
        theaterid: 2,
      },
      {
        seatid: 7,
        seatname: "A2",
        seattype: "thường",
        theaterid: 2,
      },
      {
        seatid: 8,
        seatname: "A3",
        seattype: "vip",
        theaterid: 2,
      },
      {
        seatid: 9,
        seatname: "A4",
        seattype: "thường",
        theaterid: 2,
      },
      {
        seatid: 10,
        seatname: "A5",
        seattype: "thường",
        theaterid: 2,
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
