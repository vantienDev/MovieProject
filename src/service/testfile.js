import db from "../models/index";
import crypto from "crypto-js";
// hash password
let encrypt = (password) => {
  let cipher = crypto.AES.encrypt(password, "hello").toString();
  return cipher;
};

let testing = (user) => {
  return new Promise(async (resovle, reject) => {
    try {
      let hashPasswordFromBcrypt = await encrypt(user.password);

      const data = await db.User.create({
        account: user.account,
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
        password: hashPasswordFromBcrypt,
      });
      resovle(data);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  testing,
};
