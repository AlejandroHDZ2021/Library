const mongoose = require('mongoose')

const { Schema, model } = mongoose

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },

}, {
  versionKey: false,
  timestamps: true
})

const CategoryModel = model('categories', categorySchema)

module.exports = CategoryModel