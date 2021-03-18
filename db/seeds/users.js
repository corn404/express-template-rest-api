const Knex = require("knex");
const bcrypt = require("bcryptjs");
const tableName = require("../constant/tableName");

// const salt = bcrypt.genSaltSync(12)
const password = bcrypt.hashSync("admin", 12);

/**
 *
 * @param {Knex} knex
 */

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex(tableName.users)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName.users).insert([
        {
          email: "email@gmail.com",
          username: "hermandev",
          password: password,
          role: "admin",
        },
        {
          email: "email@gmail.com",
          username: "admin",
          password: password,
          role: "admin",
        },
      ]);
    });
};
