const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { categoriesController } = require('../controllers')

const { getCategories } = categoriesController

router.get('/', async (req, res) => {
  const categories = await getCategories()
  res.send(categories)
})

module.exports = router