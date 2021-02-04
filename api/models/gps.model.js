const mongoose = require('mongoose')

const gpsSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    action: {
        type: String,
        enum: ['Installed', 'Uninstalled'],
        required: true
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employee'
    },
    company: {
        type: String
    },
    device: {
        type: String,
        required: [true, 'Device is required']
    },
    model: {
        type: String,
        required: [true, 'Device model is required']
    },
    identification: {
        type: Number,
        required: [true, 'Device identification is required'],
        minlength: [4, '4 digits required'],
        maxlength: [4, '4 digits required']
    },
    vehicle: {
        brand: String,
        model: String,
        colour: String,
        plate: String,
    },
    instDescrip: {
        type: String
    },
    instAddress: {
        type: String
    },
    location: {
        type: String
    },
    city: {
        type: String
    },
    province: {
        type: String
    },
    notes: {
        type: String
    }
})

const gpsModel = mongoose.model('gps', gpsSchema)
module.exports = gpsModel