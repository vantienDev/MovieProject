import auth from "../service/authHandle";
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

  if (!token.singal) {
    return res.status(200).json({
      message: token.message,
    });
  }

  return res.status(200).json({
    message: "Login",
    token,
  });
};

module.exports = {
  signup,
  login,
};
