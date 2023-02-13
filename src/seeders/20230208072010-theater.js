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
    return queryInterface.bulkInsert("Theaters", [
      {
        theaterid: 1,
        theatername: "CGV BigC Nha Trang",
        theatersysid: 1,
        province: "Nha Trang",
        address:
          "Tầng Trệt, TTTM Big C Nha Trang, Lô số 4, đường 19/5, Khu đô thị Vĩnh Điềm Trung, Xã Vĩnh Hiệp, Nha Trang, Khánh Hòa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theaterid: 2,
        theatername: "CGV BigC Nha Trang",
        theatersysid: 1,
        province: "Nha Trang",
        address:
          "Tầng Trệt, TTTM Big C Nha Trang, Lô số 4, đường 19/5, Khu đô thị Vĩnh Điềm Trung, Xã Vĩnh Hiệp, Nha Trang, Khánh Hòa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theaterid: 3,
        theatername: "CGV Aeon Bình Tân",
        theatersysid: 1,
        province: "TP.HCM",
        address:
          "Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theaterid: 4,
        theatername: "BHD Star Discovery",
        theatersysid: 3,
        province: "Hà Nội",
        address:
          "Tầng 8 | Trung tâm thương mại Discovery, số 302 đường Cầu Giấy, phố Dịch Vọng, quận Cầu Giấy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theaterid: 5,
        theatername: "BHD Star Phạm Ngọc Thạch",
        theatersysid: 3,
        province: "Hà Nội",
        address:
          "Tầng 8 | Vincom Plaza Phạm Ngọc Thạch, số 2 đường Phạm Ngọc Thạch, quận Đống Đa, thành phố Hà Nội",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theaterid: 6,
        theatername: "BHD Star The Garden",
        theatersysid: 3,
        province: "Hà Nội",
        address:
          "Tầng 4 & 5 | Garden Shopping Center, phố Mễ Trì, phường Mỹ Đình 1, quận Nam Từ Liêm",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theaterid: 7,
        theatername: "Lotte Hà Đông",
        theatersysid: 2,
        province: "Hà Nội",
        address:
          "Tầng 8 | Vincom Plaza Phạm Ngọc Thạch, số 2 đường Phạm Ngọc Thạch, quận Đống Đa, thành phố Hà Nội",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theaterid: 8,
        theatername: "Lotte Kosmo",
        theatersysid: 2,
        province: "Hà Nội",
        address:
          "Tầng 4 & 5 | Garden Shopping Center, phố Mễ Trì, phường Mỹ Đình 1, quận Nam Từ Liêm",
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
