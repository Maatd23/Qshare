const { decodeToken } = require("../helper/token");
const { User } = require("../models");

async function authentication(req, res, next) {
  let access_token = req.headers.access_token;
  try {
    if (!access_token) throw { name: `InvalidToken` };
    let payload = decodeToken(access_token);
    let user = await User.findByPk(payload.id);
    if (!user) throw { name: `InvalidToken` };
    req.user = {
      id: user.id,
      email: user.email,
      name: user.name,
    };
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = { authentication };
