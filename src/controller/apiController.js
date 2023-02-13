import testfile from "../service/testfile";

// Testing Api
let testing = async (req, res) => {
  const data = await testfile.testing(req.body);
  return res.status(200).json({
    message: "testing api...",
    data,
  });
};

module.exports = {
  testing, // Testing Api
};
