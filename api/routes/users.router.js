const router = require('express').Router()
const { authUser } = require('../utils')

const {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUserById
} = require('../controllers/users.controller')

router.get('/', authUser, getAllUsers)
router.get('/:id', getUserById)
router.put('/:id', updateUser)
router.delete('/:id', deleteUserById)

module.exports = router