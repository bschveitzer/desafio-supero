const express = require("express");
const routes = express.Router();
const BookshelfController = require("./controllers/BookshelfController");

//Rotas GET
routes.get("/books", BookshelfController.findBooks);
routes.get("/book/:id", BookshelfController.getBookInfo);

module.exports = routes;
