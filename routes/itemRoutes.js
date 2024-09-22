// routes/itemRoutes.js
const express = require('express')
const itemController = require('../controllers/itemController')

const router = express.Router()

// CRUD endpoints
router.get('/', itemController.getItems)
router.get('/:id', itemController.getItem)
router.post('/', itemController.createItem)
router.put('/:id', itemController.updateItem)
router.delete('/:id', itemController.deleteItem)

module.exports = router
