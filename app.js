const express = require("express");
const mysqlConnection = require("./database");
const app = express();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var cors = require('cors')
app.use(cors());

const port = 4000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
});
app.listen(port, () => {
  console.log("App running on port " + port);
});

app.post("/newuser", jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const {
    nombre,
    segundo_nombre,
    apellido_paterno,
    apellido_materno,
    fecha_nacimiento,
    email,
    telefono,
  } = req.body;
  const query = `insert into users_test_luis_rincon 
        (nombre, segundo_nombre, apellido_paterno, apellido_materno, fecha_nacimiento, email, telefono) 
        values (?,?,?,?,?,?,?)
    `;
  mysqlConnection.query(
    query,
    [
      nombre,
      segundo_nombre,
      apellido_paterno,
      apellido_materno,
      fecha_nacimiento,
      email,
      telefono,
    ],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Usuario agregado!" });
      } else {
        console.log(err);
      }
    }
  );
});
