import { useState, useEffect } from 'react'
import createCard from './services/createCard'
import createUser from './services/createUser'
import getCards from './services/getCards'
import getUsers from './services/getUsers'

export default function App() {
  const [users, setUsers] = useState([])
  const [cards, setCards] = useState([])

  useEffect(() => {
    getUsers().then(data => setUsers([...data]))
  }, [])

  useEffect(() => {
    getCards().then(data => setCards([...data]))
  }, [])

  function handleUserSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { name } = form.elements
    createUser({ name: name.value }).then(() =>
      getUsers().then(data => setUsers([...data]))
    )
    form.reset()
  }

  function handleCardSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { text, author } = form.elements
    createCard({ text: text.value, author: author.value }).then(() =>
      getCards().then(data => setCards([...data]))
    )
    form.reset()
  }

  return (
    <div>
      <h2>Users:</h2>
      <form onSubmit={handleUserSubmit}>
        <label>
          User:
          <br />
          <input name="name" />
        </label>
        <button>Create user</button>
      </form>
      {users.map(user => (
        <div key={user._id}>
          {user.name} ({user._id})
        </div>
      ))}
      <h2>Cards:</h2>
      <form onSubmit={handleCardSubmit}>
        <label>
          Text:
          <br />
          <input name="text" />
        </label>
        <label>
          <br />
          Author ID:
          <br />
          <input name="author" />
        </label>
        <br />
        <button>Create card</button>
      </form>
      {cards.map(card => (
        <div key={card._id}>
          {card.text}({card.author.name})
        </div>
      ))}
    </div>
  )
}