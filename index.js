// index.js
const express = require('express')
const itemRoutes = require('./routes/itemRoutes')
const cors = require('cors') // Import the cors package

const app = express()
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/v1/items', itemRoutes)

// Start the server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
