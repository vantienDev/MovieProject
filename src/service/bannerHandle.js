import db from "../models/index";

let getAllBanner = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const banner = await db.Banner.findAll({
        raw: true,
      });
      resolve(banner);
    } catch (error) {
      reject(error);
    }
  });
};

let getBannerById = (bannerid) => {
  return new Promise(async (resolve, reject) => {
    try {
      const bannerById = await db.Banner.findOne({
        where: { bannerid: bannerid },
        raw: true,
      });

      resolve(bannerById);
    } catch (error) {
      reject(error);
    }
  });
};

let postNewBanner = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(data);

      const postNewBanner = await db.Banner.create({
        bannerid: data.bannerid,
        movieid: data.movieid,
        image: data.image,
      });
      resolve(postNewBanner);
    } catch (error) {
      reject(error);
    }
  });
};

let deleteBanner = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const deleteBanner = await db.Banner.destroy({
        where: { id: id },
      });
      resolve(deleteBanner);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllBanner,
  getBannerById,
  postNewBanner,
  deleteBanner,
};
