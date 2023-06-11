const mongoose = require('mongoose')
const express = require('express')
const app = express()
const db = require('./db')

app.get('/', (req, res) => {
    res.send('hey man')
})

let schema = mongoose.Schema({
    name: String,
    password: String,
})

let collection = db.model('userDatas', schema)