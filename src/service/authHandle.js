import db from "../models/index";
import crypto from "crypto-js";
import jwt from "jsonwebtoken";
require("dotenv").config();

// encode
let encrypt = (password) => {
  let cipher = crypto.AES.encrypt(
    password,
    process.env.CRYPTO_SECRET_KEY
  ).toString();

  return cipher;
};

// decode
let decrypt = (passwordEncrypted) => {
  var bytes = crypto.AES.decrypt(
    passwordEncrypted,
    process.env.CRYPTO_SECRET_KEY
  );
  var originalText = bytes.toString(crypto.enc.Utf8);

  return originalText;
};

// Compare password
let comparePassword = (password, decryptPassword) => {
  return password === decryptPassword ? true : false;
};

// signup
let signup = (user) => {
  return new Promise(async (resovle, reject) => {
    let encryptPassword = await encrypt(user.password);

    try {
      let getUser = await db.User.findOne({
        where: { email: user.email },
      });
      if (!getUser) {
        const signup = await db.User.create({
          account: user.account,
          fullname: user.fullname,
          email: user.email,
          phone: user.phone,
          password: encryptPassword,
        });
        resovle(signup);
      } else {
        resovle(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

// login
let login = (user) => {
  return new Promise(async (resovle, reject) => {
    try {
      // find user in database
      let checkUser = await db.User.findOne({
        where: { email: user.email },
      });

      // Check user is avaliable
      if (!checkUser) {
        resovle({ signal: false, message: "User not avaliable" });
      }

      // decode password
      let decryptPassword = decrypt(checkUser.password);

      // so sánh password trong database và password được thêm vào
      if (!comparePassword(user.password, decryptPassword)) {
        resovle({ signal: false, message: "Password wrong" });
      }

      // payload for jwt
      let payload = { username: checkUser.fullname, type: checkUser.type };

      // generate accsess token
      let accessToken = jwt.sign(payload, process.env.JWT_ACCSESS_SECRET_KEY, {
        expiresIn: process.env.TOKEN_LIFETIME,
      });

      let refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_KEY);

      if (!accessToken) {
        resovle({ signal: false, message: "Lỗi xác thực" });
      }

      resovle({ accessToken, refreshToken });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  signup,
  login,
};
