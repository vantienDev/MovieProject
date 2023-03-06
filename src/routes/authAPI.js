import express from "express";
var cors = require("cors");

let router = express.Router();

// auth controller
import auth from "../controller/authController";

let authenticationApi = (app) => {
  // use middleware "cors" Cross-origin resource sharing

  app.use(cors());

  // User Route
  router.post("/signup", auth.signup);
  router.post("/login", auth.login);

  return app.use("/api/v1/", router);
};

module.exports = authenticationApi;
