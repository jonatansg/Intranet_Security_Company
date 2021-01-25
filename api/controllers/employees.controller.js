const EmployeeModel = require('../models/employees.model')
const { handleError } = require('../utils')

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployeeById
}

function createEmployee(req, res) {
    EmployeeModel
        .create({
            employee: req.body.employee,
            shift: req.body.shift,
            birth_date: req.body.birth_date,
            phone: req.body.phone
        })
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

function getAllEmployees(req, res) {
    EmployeeModel
        .find()
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

function getEmployeeById(req, res) {
    EmployeeModel
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

function updateEmployee(req, res) {
    EmployeeModel
        .findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

function deleteEmployeeById(req, res) {
    EmployeeModel
        .remove({ _id: req.params.id })
        .then(response => res.json(response))
        .catch(err => handleError(err, res))
}
