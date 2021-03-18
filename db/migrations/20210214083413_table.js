const Knex = require("knex");
const tableName = require("../constant/tableName");
/**
 *
 * @param {Knex} knex
 */

exports.up = async (knex) => {
  await knex.schema
    // .createTable(tableName.pegawai, (table) => {
    //   table.increments().notNullable();
    // })
    .createTable(tableName.users, (table) => {
      table.uuid("uuid").unique().primary().defaultTo(knex.raw("(UUID())"));
      table.string("email", 255).notNullable();
      table.string("username", 255).notNullable();
      table.text("password").notNullable();
      table.enum("role", ["admin", "user", "kasir", "gudang"]).notNullable();
      table.integer("status").defaultTo(1).unsigned().notNullable();
      // table.integer("id_pegawai").unsigned().notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

/**
 *
 * @param {Knex} knex
 */

exports.down = async (knex) => {
  await knex.schema.dropTable(tableName.users);
};

// const Knex = require("knex");
// const tableName = require("../table");

// /**
//  *
//  * @param {Knex} knex
//  */

// exports.up = async (knex) => {
//   try {
//     // table alamat
//     await knex.schema
//       .createTable(tableName.alamat, (table) => {
//         table.increments("id");
//         table.string("jalan", 150).nullable();
//         table.string("kelurahan", 60).nullable();
//         table.string("kecamatan", 60).nullable();
//         table.string("kabupaten", 60).nullable();
//         table.string("provinsi", 60).nullable();
//       })
//       .createTable(tableName.ortu, (table) => {
//         table.increments("id");
//         table.string("nama_ayah", 150).notNullable();
//         table.string("nama_ibu", 150).notNullable();
//         table.string("no_hp_ayah", 14).nullable();
//         table.string("no_hp_ibu", 14).nullable();
//         table.string("pekerjaan_ayah").nullable();
//         table.string("pekerjaan_ibu").nullable();
//         table.integer("id_alamat").unsigned().notNullable();
//         table
//           .foreign("id_alamat")
//           .references("id")
//           .inTable(tableName.alamat)
//           .onDelete("CASCADE");
//       })
//       .createTable(tableName.user, (table) => {
//         table.increments("id").notNullable();
//         table.string("username", 100).notNullable();
//         table.text("password").notNullable();
//         table.enum("role", ["admin", "tu", "guru", "ortu"]).notNullable();
//         table.timestamp("created_at").defaultTo(knex.fn.now());
//         table.timestamp("updated_at").defaultTo(knex.fn.now());
//       })
//       .createTable(tableName.siswa, (table) => {
//         table.increments("id");
//         table.string("nis", 20).nullable();
//         table.string("nama_lengkap").notNullable();
//         table.integer("kelamin").notNullable();
//         table.string("temp_lahir", 60).notNullable();
//         table.dateTime("tanggal_alhir").notNullable();
//         table.string("agama", 20).notNullable();
//         table.string("rfid", 25).nullable();
//         table.text("foto").nullable();
//         table.integer("id_alamat").unsigned().notNullable();
//         table.integer("id_ortu").unsigned().notNullable();
//         table.integer("status").notNullable().defaultTo(0);
//         table
//           .foreign("id_alamat")
//           .references("id")
//           .inTable(tableName.alamat)
//           .onDelete("CASCADE");
//         table
//           .foreign("id_ortu")
//           .references("id")
//           .inTable(tableName.ortu)
//           .onDelete("CASCADE");
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };

// /**
//  *
//  * @param {Knex} knex
//  */

// exports.down = async (knex) => {
//   await knex.schema
//     .dropTable(tableName.siswa)
//     .dropTable(tableName.alamat)
//     .dropTable(tableName.ortu)
//     .dropTable(tableName.user);
// };
