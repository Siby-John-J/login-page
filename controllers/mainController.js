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
    console.log(req.url)
    if(req.body) {
        res.send(`your name is ${req.body.name} and ${req.body.pass}`)
    } else {
        res.send('there was an error')
    }
    
    // main.insertOne({username: req.body.name, password: req.body.pass})
}

module.exports.books = (req, res) => {
    console.log(req.params)
    let bookCollections = {
        first: 'winds_of_winter',
        second: 'fire and blood',
        third: 'clash of king'
    }
    
    if(req.params.bookname === bookCollections.first) {
        res.send('youre in ' + bookCollections.first)
    } else {
        res.json(bookCollections)
    }

}