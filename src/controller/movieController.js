import movieHandle from "../service/movieHandle";
// Movie Api
// 1> get all movie
let getAllMovie = async (req, res) => {
  const movies = await movieHandle.getAllMovie();
  return res.status(200).json({
    message: "Get all movie",
    movies,
  });
};

// 2> get movie by id
let getMovieById = async (req, res) => {
  const movieById = await movieHandle.getMovieById(req.params.movieid);
  if (movieById === null) {
    return res.status(404).json({
      message: "Movie not found",
      movie_id: req.params.movieid,
    });
  }
  return res.status(200).json({
    message: "get movie by id",
    movieId: req.params.movieid,
    movieById,
  });
};

// 3> get movie by name
let getMovieByName = async (req, res) => {
  const movieByName = await movieHandle.getMovieByName(req.params.moviename);
  return res.status(200).json({
    message: "get movie by name",
    movieName: req.params.moviename,
    movieByName,
  });
};

let getMoviePagination = async (req, res) => {
  const pagination = await movieHandle.getMoviePagination(
    parseInt(req.params.items) || 3,
    parseInt(req.params.pages)
  );
  return res.status(200).json({
    message: "get movie pagination",
    currentPage: req.params.pages,
    totalPage: pagination.count / req.params.items,
    movies: pagination.rows,
  });
};

let addNewMovie = async (req, res) => {
  const addNewMovie = await movieHandle.addNewMovie(req.body);
  return res.status(200).json({
    message: "Add new movie complete",
    addNewMovie,
  });
};

let updateTrailer = async (req, res) => {
  const newTrailer = await movieHandle.updateTrailer(req.body);
  return res.status(200).json({
    message: "Update new trailer",
    newTrailer,
  });
};

let updateImage = async (req, res) => {
  const newImage = await movieHandle.updateImage(req.body);
  return res.status(200).json({
    message: "Update new image",
    newImage,
  });
};

let deleteMovie = async (req, res) => {
  const deleteMovie = await movieHandle.deleteMovie(req.params);
  if (deleteMovie === 0) {
    return res.status(404).json({
      message: "Movie to delete not found",
      movie_name: req.params.moviename,
    });
  }

  return res.status(200).json({
    message: "Delete movie",
    deleteMovie,
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
