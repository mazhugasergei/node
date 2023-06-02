const express = require('express')
const controller = require('../controllers/note.controller')

const router = express.Router()

router.get('/create', controller.note_create)
router.get('/:id', controller.note_get)
router.delete('/:id', controller.note_delete)

module.exports = router