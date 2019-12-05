const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const dataset = require("./src/dataset/Book.json");

//Iniciando App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o banco de dados, dropando para limpar os resgistros e inserindo o dataset
async function initDatabase() {
  await mongoose.connect("mongodb://localhost:27017/desafio-supero", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  await mongoose.connection.db.dropDatabase();
  mongoose.model("Book").insertMany(dataset.data);
}

initDatabase();

requireDir("./src/models");

//Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);
