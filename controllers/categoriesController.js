const CategoryModel = require('../models/categoriesModel')

const getCategories = async () => {
  return CategoryModel.find({})
}

module.exports = {
  getCategories
}