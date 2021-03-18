const bcrypt = require("bcryptjs");
const WebResponse = require("../utils/WebResponse");
const db = require("../../db");
const tableName = require("../../db/constant/tableName");

const UserRegister = async (req, res, next) => {
  const { email, username, password, role, status } = req.body;
  try {
    const checkEmail = await db(tableName.users)
      .where({ username })
      .select("email", "username", "password", "role", "status");

    const passwordHash = await bcrypt.hashSync(password, 12);

    if (checkEmail.length > 0) {
      return WebResponse(res, 200, "Success", "Username sudah terdaftar");
    }

    await db(tableName.users)
      .insert({
        email,
        username,
        password: passwordHash,
        role,
        status,
      })
      .then((result) => {
        return WebResponse(res, 200, "Success", "Users Created!");
      });
  } catch (error) {
    return next(error);
  }
};

const GetUsers = async (req, res, next) => {
  try {
    const checkEmail = await db(tableName.users)
      .select("uuid", "email", "username", "role", "status")
      .whereNot({ role: "admin" });
    return WebResponse(res, 200, "Success", checkEmail);
  } catch (error) {
    return next(error);
  }
};

const UserLogin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
  } catch (error) {}
};

module.exports = {
  UserRegister,
  GetUsers,
};
