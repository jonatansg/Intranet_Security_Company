const GpsModel = require('../models/gps.model')
const { handleError } = require('../utils')

module.exports = {
    createGps,
    getAllGps,
    getGpsById,
    listGpsByDate,
    listGpsByCity,
    listGpsByProvince,
    updateGps,
    deleteGpsById
}

function createGps(req, res) {
    console.log(req.body)
    GpsModel
        .create({
            date: req.body.date,
            time: req.body.time,
            action: req.body.action,
            employee: req.body.employee,
            device: req.body.device,
            model: req.body.model,
            identification: req.body.identification,
            vehicle: { 
                brand: req.body.vehicle.brand,
                model: req.body.vehicle.model,
                colour: req.body.vehicle.colour,
                plate: req.body.vehicle.plate
            },
            instDescrip: req.body.instDescrip,
            company: req.body.company,
            instAddress: req.body.instAddress,
            location: req.body.location,
            city: req.body.city,
            province: req.body.province,
            notes: req.body.notes
        })
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

function getAllGps(req, res) {
    GpsModel
        .find()
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

function getGpsById(req, res) {
    GpsModel
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

function listGpsByDate(req, res) {
    GpsModel
        .find({ date: req.params.dateId })
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

function listGpsByCity(req, res) {
    GpsModel
        .find({ city: req.params.cityId })
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

function listGpsByProvince(req, res) {
    GpsModel
        .find({ province: req.params.provinceId })
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

function updateGps(req, res) {
    GpsModel
        .findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

function deleteGpsById(req, res) {
    GpsModel
        .remove({ _id: req.params.id })
        .then(response => res.json(response))
        .catch(err => handleError(err, res))
}
