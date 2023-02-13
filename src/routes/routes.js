import express from "express";
import mainController from "../controller/mainController";

let router = express.Router();

let initRouter = (app) => {
  // pages
  router.get("/", mainController.hompage);

  return app.use("/", router);
};

module.exports = initRouter;
