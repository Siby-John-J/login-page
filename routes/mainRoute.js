const express = require('express')
const route = express.Router()

const { login, home, books } = require('../controllers/mainController')

route.get('/', login)
route.get('/books', books)
route.get('/books/:bookname', books)

route.post('/home', home)

module.exports = route