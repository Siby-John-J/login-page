const db = require('../db')
const mongoose = require('mongoose')

let schema = mongoose.Schema({
    username: String,
    password: String
})

let collection = db.model('Dataz', schema)