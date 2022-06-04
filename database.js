const mysql = require("mysql2");

const database = mysql.createConnection({
  host: "data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com",
  user: "testing",
  password: "Pruebas%ALI%2020",
  database: "testing_ali_fullstack",
});

database.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("db conectado");
  }
});

module.exports = database;
