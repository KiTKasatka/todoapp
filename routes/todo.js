const express = require('express')
const controller = require('../controllers/todo')
const router = express.Router()

http://localhost:5000/api/todo/create
router.post('/save', controller.save)
router.post('/getAll', controller.getAll)
module.exports = router