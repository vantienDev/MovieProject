import express from "express";
import apiController from "../controller/apiController";
var cors = require("cors");

let router = express.Router();

// Controllers
import banner from "../controller/bannerController";
import movie from "../controller/movieController";
import theater from "../controller/theaterController";
import auth from "../controller/authController";

let initApi = (app) => {
  // use middleware "cors" Cross-origin resource sharing
  app.use(cors());

  // api
  router.post("/testing", apiController.testing);

  // Banner Route
  router.get("/getAllBanner", banner.getAllBanner);
  router.get("/getBanner/?bannerid=:bannerid", banner.getBannerById);
  router.post("/postNewBanner", banner.postNewBanner);
  router.delete("/deleteBanner/?bannerid=:bannerid", banner.deleteBanner);

  // Movie Route

  router.get("/getAllMovie", movie.getAllMovie);
  router.get("/getMovie/?movieid=:movieid", movie.getMovieById);
  router.get("/getMovie/?moviename=:moviename", movie.getMovieByName);
  router.get(
    "/getMovie/pagination/?items=:items/?pages=:pages",
    movie.getMoviePagination
  );
  router.post("/getMovie/addNewMovie", movie.addNewMovie);
  router.post("/getMovie/updateTrailer", movie.updateTrailer);
  router.post("/getMovie/updateImage", movie.updateImage);
  router.delete(
    "/getMovie/deleteMovie/?moviename=:moviename",
    movie.deleteMovie
  );

  // theater system Route
  router.get("/getTheaterSystem", theater.getTheaterSystem);
  router.get("/getTheaters", theater.getAllTheater);
  router.get(
    "/getThaeters/province/?province=:province",
    theater.getTheaterInProvince
  );
  router.get("/getThaeters/system/?system=:system", theater.getTheaterInSystem);
  router.get("/getSeatsInTheater/?theater=:theater", theater.getSeatsInTheater);

  // User Route
  router.post("/user/signup", auth.signup);
  router.post("/user/login", auth.login);

  return app.use("/api/v1/", router);
};

module.exports = initApi;
