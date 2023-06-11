const db = require('../db')
const mongoose = require('mongoose')

let schema = mongoose.Schema({
    username: String,
    password: String
})

// module.exports.main = db.model('userData', schema)

let collection = db.model('Dataz', schema)