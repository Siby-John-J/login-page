const express = require('express')
const app = express()
let { main } = require('../models/mainModel')

app.use(express.urlencoded({extended: true}))

module.exports.login = (req, res) => {
    res.send(`
        <form action="/home" method="post">
            <input type="text" name="name">
            <input type="password" name="pass">
            <button>submit</button>
        </form>
    `)
}

module.exports.home = (req, res) => {
    // console.log(req.body)
    if(req.body) {
        res.send(`your name is ${req.body.name} and ${req.body.pass}`)
    } else {
        res.send('there was an error')
    }
    
    // main.insertOne({username: req.body.name, password: req.body.pass})
}