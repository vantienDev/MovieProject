import { where } from "sequelize";
import db from "../models/index";

let getAllMovie = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const movies = await db.Movie.findAll({
        raw: true,
      });

      resolve(movies);
    } catch (error) {
      reject(error);
    }
  });
};

let getMovieById = (movieid) => {
  return new Promise(async (resolve, reject) => {
    try {
      const movieById = await db.Movie.findOne({
        where: { movieid: movieid },
        raw: true,
      });
      resolve(movieById);
    } catch (error) {
      reject(error);
    }
  });
};

let getMovieByName = (moviename) => {
  return new Promise(async (resolve, reject) => {
    try {
      const movieByName = await db.Movie.findOne({
        where: { name: moviename },
        include: [{ model: db.Theater }],
        raw: true,
      });
      resolve(movieByName);
    } catch (error) {
      reject(error);
    }
  });
};

let getMoviePagination = (items, pages) => {
  return new Promise(async (resolve, reject) => {
    try {
      const moviePagination = await db.Movie.findAndCountAll({
        offset: items * pages - items,
        limit: items,
        nest: true,
        raw: true,
      });
      resolve(moviePagination);
    } catch (error) {
      reject(error);
    }
  });
};

let addNewMovie = (movie) => {
  return new Promise(async (resolve, reject) => {
    try {
      const addNewMovie = await db.Movie.create({
        movieid: movie.movieid,
        name: movie.name,
        trailer: movie.trailer,
        image: movie.image,
        description: movie.description,
        openingday: movie.openingday,
        evaluate: movie.evaluate,
      });
      resolve(addNewMovie);
    } catch (error) {
      reject(error);
    }
  });
};

let updateTrailer = (movie) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newTrailer = await db.Movie.update(
        {
          trailer: movie.trailer,
        },
        { where: { movieid: movie.movieid } }
      );
      resolve(newTrailer);
    } catch (error) {
      reject(error);
    }
  });
};

let updateImage = (movie) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newImage = await db.Movie.update(
        {
          image: movie.image,
        },
        { where: { movieid: movie.movieid } }
      );
      resolve(newImage);
    } catch (error) {
      reject(error);
    }
  });
};

let deleteMovie = (movie) => {
  console.log(movie.moviename);
  return new Promise(async (resolve, reject) => {
    try {
      const deleteMovie = await db.Movie.destroy({
        where: { name: movie.moviename },
      });
      resolve(deleteMovie);
    } catch (error) {
      reject(reject);
    }
  });
};

module.exports = {
  getAllMovie,
  getMovieById,
  getMovieByName,
  getMoviePagination,
  addNewMovie,
  updateTrailer,
  updateImage,
  deleteMovie,
};
