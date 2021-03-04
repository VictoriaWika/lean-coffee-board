const express = require('express')
const User = require('../models/User')
const router = express.Router()

router.get('/', async (req, res, next) => {
  // Jerrys Kommentar
  res.json(await User.find().catch(next))
})

router.get('/:id', async (req, res, next) => {
  // :id, weil es ein variabler Wert ist, den wir austauschen
  const { id } = req.params
  res.json(await User.findById(id).catch(next))
})

router.delete('/:id', async (req, res, next) => {
  //   const index = users.findIndex(user => user.id === id)
  //   users = [...users.slice(0, index), ...users.slice(index + 1)]
  //   res.json(users)
  const { id } = req.params
  res.json(await User.findByIdAndDelete(id).catch(next))
})

router.post('/', async (req, res, next) => {
  //   const newUser = { ...req.body, id: v4() }
  //   users.push(newUser)
  res.json(await User.create(req.body).catch(next))
})

module.exports = router
