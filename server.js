const express = require('express')
const app = express()
let users = []
const { v4: v4 } = require('uuid')
const mongoose = require('mongoose')
const User = require('./models/User')

mongoose
  .connect('mongodb://localhost/lean-coffee-board', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to mongodb'))
  .catch(error => console.error('Could not connect to mongodb', error))

app.use(express.json()) // add middleware for json data

app.get('/api/users', async (req, res) => {
  // Jerrys Kommentar
  res.json(await User.find())
})

app.get('/api/users/:id', async (req, res) => {
  // :id, weil es ein variabler Wert ist, den wir austauschen
  const { id } = req.params
  res.json(await User.findOne({ id }))
})

// ------------------------------------------

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params
  const index = users.findIndex(user => user.id === id)
  users = [...users.slice(0, index), ...users.slice(index + 1)]
  res.json(users)
})

// ------------------------------------------

app.post('/api/users', async (req, res) => {
  //   const newUser = { ...req.body, id: v4() }
  //   users.push(newUser)
  res.json(await User.create(req.body))
})

app.get('/api/cards', (req, res) => {
  res.json([{ title: 'First card' }])
})

app.listen(3000, () => {
  console.log('Server startet at http://localhost:3000')
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
