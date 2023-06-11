const express = require('express')
const route = express.Router()

const { login, home } = require('../controllers/mainController')

route.get('/', login)
route.post('/home', home)

module.exports = route