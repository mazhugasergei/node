const express = require('express')
const controller = require('../controllers/note.controller')

const router = express.Router()

router.get('/', controller.index_get)
router.post('/', controller.index_post)

module.exports = router