const express = require('express')
const app = express()
const mainRoute = require('./routes/mainRoute')

app.use('/', mainRoute)

app.listen(2000)