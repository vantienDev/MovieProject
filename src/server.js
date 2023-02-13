import express from "express";
import viewEngine from "./config/viewEngine";
import initRoutes from "./routes/routes";
import initApi from "./routes/api";
import morgan from "morgan";
import bodyParser from "body-parser";

require("dotenv").config();

let app = express();

// Body request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use morgan midleware
app.use(morgan());

// config app
// viewEngine
viewEngine(app);
// routes
initRoutes(app);
// api
initApi(app);
let port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log("server run on port: ", port);
});
