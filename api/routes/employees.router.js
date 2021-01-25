const router = require('express').Router()
const { authUser } = require('../utils')

const {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployeeById
} = require('../controllers/employees.controller')

router.post('/', authUser, createEmployee)
router.get('/', authUser, getAllEmployees)
router.get('/:id', authUser, getEmployeeById)
router.put('/:id', authUser, updateEmployee)
router.delete('/:id', authUser, deleteEmployeeById)

module.exports = router