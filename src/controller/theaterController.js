import theaterHandle from "../service/theaterHandle";
// Theater System Api
let getTheaterSystem = async (req, res) => {
  const theaterSystems = await theaterHandle.getAllTheaterSystem();
  return res.status(200).json({
    message: "theater system",
    theaterSystems,
  });
};

let getAllTheater = async (req, res) => {
  const theaters = await theaterHandle.getAllTheater();
  return res.status(200).json({
    message: "theaters",
    theaters,
  });
};

let getTheaterInProvince = async (req, res) => {
  const theaterInProvince = await theaterHandle.getTheaterInProvince(
    req.params.province
  );
  return res.status(200).json({
    message: "take the theaters in the province ",
    theaterInProvince,
  });
};

let getTheaterInSystem = async (req, res) => {
  const theaterInSystem = await theaterHandle.getTheaterInSystem(
    req.params.system
  );
  return res.status(200).json({
    message: "take the theaters in the system ",
    theaterInSystem,
  });
};

let getSeatsInTheater = async (req, res) => {
  const seats = await theaterHandle.getSeatsInTheater(req.params.theater);
  return res.status(200).json({
    message: "take the seats in the theater ",
    seats,
  });
};

module.exports = {
  getTheaterSystem,
  getAllTheater,
  getTheaterInProvince,
  getTheaterInSystem,
  getSeatsInTheater,
};
