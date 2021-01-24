const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    employee: {
        type: String,
        required: [true, 'Employee name is required']
    },
    shift: {
        type: String
    },
    age: {
        type: Number,
    },
    phone: {
        type: Number,
        required: [true, 'Phone is required'],
        minlength: [9, '9 digits required'],
        maxlength: [9, '9 digits required']
    }
})

const employeeModel = mongoose.model('employee', employeeSchema)
module.exports = employeeModel