// models/itemModel.js
const { readDataFromFile, writeDataToFile } = require('../utils/fileUtils')

const getAllItems = () => readDataFromFile()

const getItemById = (id) => {
  const data = readDataFromFile()
  return data.find((item) => item.id === id)
}

const createItem = (item) => {
  const data = readDataFromFile()
  const newItem = {
    id: data.length ? data[data.length - 1].id + 1 : 1,
    ...item,
  }
  data.push(newItem)
  writeDataToFile(data)
  return newItem
}

const updateItem = (id, updatedFields) => {
  const data = readDataFromFile()
  const index = data.findIndex((item) => item.id === id)

  if (index === -1) return null

  data[index] = { ...data[index], ...updatedFields }
  writeDataToFile(data)
  return data[index]
}

const deleteItem = (id) => {
  let data = readDataFromFile()
  const index = data.findIndex((item) => item.id === id)

  if (index === -1) return false

  data = data.filter((item) => item.id !== id)
  writeDataToFile(data)
  return true
}

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
}
