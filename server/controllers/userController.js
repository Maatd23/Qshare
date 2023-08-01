const { comparePassword } = require("../helper/hashing");
const { encodeToken } = require("../helper/token");
const { User } = require("../models");

class UserController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) throw { name: "email_required" };
      if (!password) throw { name: "password_required" };
      const user = await User.findOne({ where: { email } });
      if (!user) throw { name: "wrong" };
      const isValidPassword = comparePassword(password, user.password);
      if (!isValidPassword) throw { name: "wrong" };
      const token = encodeToken({ id: user.id });
      res.status(200).json({ access_token: token, name: user.name });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async register(req, res, next) {
    try {
      const { name, email, password, phoneNumber, address } = req.body;

      const user = await User.create({
        name,
        email,
        password,
        phoneNumber,
        address,
      });

      res.status(201).json({
        message: `User with email ${user.email} has been created`,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = UserController;
