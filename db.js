const mongoose = require('mongoose')

let connect = mongoose.createConnection('mongodb://127.0.0.1:27017/myDataBase')

module.exports = connect
