require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL,
    {
        dbName: process.env.MONGO_DB || 'test',
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }, err => {
        if (err) { throw new Error(err) }
        console.info('💾 Connected to Mongo Database \n')
        
        const bcrypt = require('bcrypt')

        const UserModel = require('./api/models/users.model')
        UserModel.create({
            username: 'Jonny',
            email: 'jonny2@reboot.com',
            role: 'admin',
            password: bcrypt.hashSync('hola', 10)
        }).then(user => {
            console.log(user)
        })
    })