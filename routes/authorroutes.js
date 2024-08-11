const express = required ('express')
const router = express.Router()
const authorCtrl = require('../controllers/authors')

//Index
router.get('/', authorCtrl.index)
//New
router.get('/new', authorCtrl.new)
//Update
router.put('/:id, authorCtrl.update')
//Delete
router.delete('/:id', authorCtrl.destro)
//Create
router.post('/', authorCtrl.create)
//Edit
router.get('/:id/edit', authorCtrl.edit)
//Show
router.get('/:id, authorCtrl.show')

module.exports = Author