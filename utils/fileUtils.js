// utils/fileUtils.js
const fs = require('fs')
const path = require('path')

const dataFilePath = path.join(__dirname, '../data/data.json')

// Read data from JSON file
const readDataFromFile = () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

// Write data to JSON file
const writeDataToFile = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8')
}

module.exports = {
  readDataFromFile,
  writeDataToFile,
}
