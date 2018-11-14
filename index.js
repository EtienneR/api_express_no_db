// Import packages
const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/post.routes'))

app.listen('1337')