import express from "express";
import viewEngine from "./config/viewEngine";
import initRoutes from "./routes/authAPI";
import morgan from "morgan";
import bodyParser from "body-parser";
const cookieParser = require("cookie-parser");

require("dotenv").config();

let app = express();

// Body request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cookie
app.use(cookieParser());

// use morgan midleware
app.use(morgan());

// config app
// viewEngine
viewEngine(app);

// api
initRoutes(app);
let port = process.env.PORT_AUTHEN || 9696;

app.listen(port, () => {
  console.log("server atuthen run on port: ", port);
});
