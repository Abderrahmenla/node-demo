// controllers/itemController.js
const itemModel = require('../models/itemModel')

const getItems = (req, res) => {
  const items = itemModel.getAllItems()
  res.json(items)
}

const getItem = (req, res) => {
  const item = itemModel.getItemById(parseInt(req.params.id))

  if (!item) {
    return res.status(404).json({ message: 'Item not found' })
  }

  res.json(item)
}

const createItem = (req, res) => {
  const newItem = itemModel.createItem(req.body)
  res.status(201).json(newItem)
}

const updateItem = (req, res) => {
  console.log(req.body)
  const updatedItem = itemModel.updateItem(parseInt(req.params.id), req.body)

  if (!updatedItem) {
    return res.status(404).json({ message: 'Item not found' })
  }

  res.json(updatedItem)
}

const deleteItem = (req, res) => {
  const isDeleted = itemModel.deleteItem(parseInt(req.params.id))

  if (!isDeleted) {
    return res.status(404).json({ message: 'Item not found' })
  }

  res.status(204).send()
}

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
}
