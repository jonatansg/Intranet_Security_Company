process.stdout.write('\x1B[2J\x1B[0f') // Clear terminal screen
require('dotenv').config()

const express = require('express')

const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

// MONGOOSE
mongoose.connect(process.env.MONGO_URL,
    {
        dbName: process.env.MONGO_DB || 'test',
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }, err => {
        if (err) { throw new Error(err) }
        console.info('💾 Connected to Mongo Database \n')
    })

// ADDING MIDDLEWARES & ROUTER
const app = express()
    .use(helmet())
    .use(cors())
    .use(morgan('combined'))
    .use(function(req,res,next) {
        res.setHeader('Content-Security-Policy', "script-src 'self' https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js");
        next();
    })
    .use(express.json())
    .use(express.static(path.join(__dirname, 'public')))
    .use('/api', require('./api/routes'))

// Init server
const PORT = process.env.PORT || 2222
app.listen(PORT, (err) => {
    if (err) { throw new Error(err) }
    console.info('>'.repeat(42))
    console.info('💻  Intranet Security Company Server Live')
    console.info(`📡  PORT: http://localhost:${PORT}`)
    console.info('>'.repeat(42) + '\n')
})