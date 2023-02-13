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

// generate token
let generateToken = async (payload, key, timelife) => {
  return await jwt.sign(
    {
      payload,
    },
    key,
    {
      algorithm: "HS256",
      expiresIn: timelife,
    }
  );
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
      let checkUser = await db.User.findOne({
        where: { email: user.email },
      });

      // Check password is avaliable
      if (!checkUser) {
        resovle({ signal: false, message: "User not avaliable" });
      }

      // decode
      let decryptPassword = decrypt(checkUser.password);

      // compare password
      let checkPassword = comparePassword(user.password, decryptPassword);

      if (!checkPassword) {
        resovle({ signal: false, message: "Password wrong" });
      }

      // payload for jwt
      let payload = { username: checkUser.fullname, type: checkUser.type };

      // generate accsess token
      let _generateToken = await generateToken(
        payload,
        process.env.JWT_SECRET_KEY,
        process.env.TOKEN_LIFETIME
      );

      if (!generateToken) {
        resovle(false);
      }

      resovle(_generateToken);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  signup,
  login,
};
