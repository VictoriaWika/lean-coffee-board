const express = require('express')
const setupMongo = require('./setupMongo')

setupMongo()
const app = express()

app.use(express.json()) // add middleware for json data

app.use('/api/users', require('./routes/users'))
app.use('/api/cards', require('./routes/cards'))
app.use(require('./routes/error'))

app.listen(4000, () => {
  console.log('Server started at http://localhost:4000')
})

// Vor res.json sah unser code so aus:
// app.use('/api/users', (req, res) => {
//     res.end('[{"name": "Melissa", "role": "student"}]')
//   })

// lange Schreibweise für app.use
// app.use((req, res, next) => {
//     req.url === '/api/users'
//     ? res.end('[{"name": "Melissa", "role": "student"}]')
//     : next()
// })
