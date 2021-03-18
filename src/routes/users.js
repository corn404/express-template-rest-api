const express = require("express");
const route = express.Router();
const { GetUsers, UserRegister } = require("../controllers");

route.get("/", GetUsers);
route.post("/", UserRegister);

module.exports = route;
