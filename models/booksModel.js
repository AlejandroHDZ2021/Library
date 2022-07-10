const mongoose = require('mongoose')

const { Schema, model } = mongoose

const bookSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  autor: String,
  anio: Number,
  editorial: String

}, {
  versionKey: false,
  timestamps: true
})

const BookModel = model('books', bookSchema)

module.exports = BookModel