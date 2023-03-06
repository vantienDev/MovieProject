import auth from "../service/authHandle";
import jwt from "jsonwebtoken";

// User Handle

let signup = async (req, res) => {
  const signup = await auth.signup(req.body);

  if (!signup) {
    return res.status(409).json({
      message: "Tên đăng nhập đã tồn tại",
      user_email: req.body.email,
    });
  }

  return res.status(200).json({
    message: "Sign up",
    signup,
  });
};

let login = async (req, res) => {
  const token = await auth.login(req.body);

  if (token.signal === false) {
    return res.status(200).json({
      message: token.message,
    });
  }

  res.cookie("accessToken", token.accessToken, { httpOnly: true });
  res.cookie("refreshToken", token.refreshToken, { httpOnly: true });

  return res.redirect("/");
};

let authenToken = (req, res, next) => {
  // get token
  const accessToken = req.headers["authorization"];
  // check token
  if (!accessToken) res.sendStatus(401);

  jwt.verify(accessToken, process.env.JWT_SECRET_KEY, (err, data) => {
    if (err) res.sendStatus(403);
    next();
  });
};

module.exports = {
  signup,
  login,
  authenToken,
};
