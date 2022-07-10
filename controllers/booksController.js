const BookModel = require('../models/booksModel')

const getBooks = async () => {
  return BookModel.find({})
}

module.exports = {
  getBooks
}