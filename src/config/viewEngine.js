import express from "express";

let configViewEngine = (app) => {
  // Config use file public
  app.use(express.static("./src/public"));

  // set view engine === "ejs"
  app.set("view engine", "ejs");

  // set views
  app.set("views", "./src/views");
};

module.exports = configViewEngine;
