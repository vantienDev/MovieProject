import bannerHandle from "../service/bannerHandle";

// Banner Api
let getAllBanner = async (req, res) => {
  const banners = await bannerHandle.getAllBanner();
  return res.status(200).json({
    message: "Get all banners api",
    banners,
  });
};

let getBannerById = async (req, res) => {
  const bannerById = await bannerHandle.getBannerById(req.params.bannerid);
  if (bannerById === null) {
    return res.status(404).json({
      message: "Banner not found",
      banner_id: req.params.bannerById,
    });
  }
  return res.status(200).json({
    message: "Get banners api by id",
    bannerById,
  });
};

let postNewBanner = async (req, res) => {
  const postNewBanner = await bannerHandle.postNewBanner(req.body);
  return res.status(200).json({
    message: "Post banner",
    postNewBanner,
  });
};

let deleteBanner = async (req, res) => {
  const deleteBanner = await bannerHandle.deleteBanner(req.params.bannerid);
  return res.status(200).json({
    message: "Delete banner",
    deleteBanner,
  });
};

module.exports = {
  getAllBanner,
  getBannerById,
  postNewBanner,
  deleteBanner,
};
