const express = require('express')

const app = express()

app.use('/api/users', (req, res) => {
  res.end('[{"name": "Melissa", "role": "student"}]')
})
// lange Schreibweise
// app.use((req, res, next) => {
//     req.url === '/api/users'
//     ? res.end('[{"name": "Melissa", "role": "student"}]')
//     : next()
// })

app.use('/api/cards', (req, res) => {
  res.end('[{"title": "First card"}]')
})

app.listen(3000, () => {
  console.log('Server startet at http://localhost:3000')
})
