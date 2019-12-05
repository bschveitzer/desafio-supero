const mongoose = require("mongoose");
const Book = mongoose.model("Book");

module.exports = {
  //Busca de livros por título, autor ou ISBN
  async findBooks(req, res) {
    const { page, search, initialDate, finalDate } = req.query;

    const query = search
      ? { $or: [{ title: { "$regex": search, "$options": "i" } }, { author: { "$regex": search, "$options": "i" } }, { ISBN: { "$regex": search, "$options": "i" } }]}
      : {};

    if(initialDate && finalDate) query.year = { $gte: initialDate, $lte: finalDate}

    const books = await Book.paginate(query, {
      page: parseInt(page),
      limit: 5,
      select: 'id title ISBN author publisher year'
    })

    return res.json(books);
  },
  //Busca de informações de um livro específico
  async getBookInfo(req, res) {
    const book = await Book.findById(req.params.id);
    return res.json(book);
  }
};
