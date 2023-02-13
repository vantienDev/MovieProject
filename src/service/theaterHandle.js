import { raw } from "body-parser";
import db from "../models/index";

let getAllTheaterSystem = () => {
  return new Promise(async (resovle, reject) => {
    try {
      const theatersys = await db.TheaterSystem.findAll({
        raw: true,
      });
      resovle(theatersys);
    } catch (error) {
      reject(error);
    }
  });
};

let getAllTheater = () => {
  return new Promise(async (resovle, reject) => {
    try {
      const theaters = await db.Theater.findAll({
        raw: true,
      });
      resovle(theaters);
    } catch (error) {
      reject(error);
    }
  });
};

let getTheaterInProvince = (province) => {
  return new Promise(async (resovle, reject) => {
    try {
      const theaterInProvince = await db.Theater.findAll({
        where: { province: province },
        include: [{ model: db.Movie }],
      });
      resovle(theaterInProvince);
    } catch (error) {
      reject(error);
    }
  });
};

let getTheaterInSystem = (system) => {
  return new Promise(async (resovle, reject) => {
    try {
      const theaterInProvince = await db.Theater.findAll({
        where: { theatersysid: system },

        include: [
          {
            model: db.TheaterSystem,
            as: "theatersys",
            attributes: ["theatersysname"],
          },

          { model: db.Movie },
        ],
      });
      resovle(theaterInProvince);
    } catch (error) {
      reject(error);
    }
  });
};

let getSeatsInTheater = (theater) => {
  return new Promise(async (resovle, reject) => {
    try {
      const seats = await db.Theater.findOne({
        where: { theaterid: theater },
        include: [
          {
            model: db.Seat,
            as: "seat",
          },
        ],
      });
      resovle(seats);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllTheaterSystem,
  getAllTheater,
  getTheaterInProvince,
  getTheaterInSystem,
  getSeatsInTheater,
};
