const router = require('express').Router()
const { authUser } = require('../utils')

const {
    createGps,
    getAllGps,
    getGpsById,
    listGpsByDate,
    listGpsByCity,
    listGpsByProvince,
    updateGps,
    deleteGpsById
} = require('../controllers/gps.controller')

router.post('/', authUser, createGps)
router.get('/', authUser, getAllGps)
router.get('/:id', authUser, getGpsById)
router.get('/date/:dateId', authUser, listGpsByDate)
router.get('/city/:cityId', authUser, listGpsByCity)
router.get('/province/:provinceId', authUser, listGpsByProvince)
router.put('/:id', authUser, updateGps)
router.delete('/:id', authUser, deleteGpsById)

module.exports = router