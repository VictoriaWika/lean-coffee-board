const express = require('express')
const setupMongo = require('./setupMongo')

setupMongo()
const app = express()

app.use(express.json())

app.use('/api/users', require('./routes/users'))
app.use('/api/cards', require('./routes/cards'))
app.use(require('./routes/error'))

app.listen(4000, () => {
  console.log('Server started at http://localhost:4000')
})
