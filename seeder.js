// data/seeder.js
const fs = require('fs')
const path = require('path')

// Path to the data.json file
const dataFilePath = path.join(__dirname, '/data/data.json')

// Sample data to be seeded
const sampleData = [
  {
    id: 1,
    name: 'Sample Item 1',
    description: 'This is the first sample item.',
    price: 10.99,
  },
  {
    id: 2,
    name: 'Sample Item 2',
    description: 'This is the second sample item.',
    price: 19.99,
  },
  {
    id: 3,
    name: 'Sample Item 3',
    description: 'This is the third sample item.',
    price: 29.99,
  },
]

// Write the sample data to the JSON file
fs.writeFile(
  dataFilePath,
  JSON.stringify(sampleData, null, 2),
  'utf8',
  (err) => {
    if (err) {
      console.error('Error seeding data:', err)
    } else {
      console.log('Data seeding completed successfully.')
    }
  }
)
