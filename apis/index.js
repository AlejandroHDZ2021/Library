const express = require('express');
const router = express.Router()

const booksRouter = require('./books')

router.use('/books', booksRouter)

const categorysRouter = require('./categories')

router.use('/categories', categorysRouter)

module.exports = router





