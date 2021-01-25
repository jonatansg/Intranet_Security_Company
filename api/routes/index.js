const router = require('express').Router()

const usersRouter = require('./users.router')
const authRouter = require('./auth.router')
const employeesRouter = require('./employees.router')
const { authUser } = require('../utils') // Authenticated Route

router
    .use('/users', usersRouter)
    .use('/auth', authRouter)
    .use('/employees', employeesRouter)

module.exports = router