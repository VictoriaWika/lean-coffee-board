import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
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
    <AppLayout>
      <h2>Users:</h2>
      <form onSubmit={handleUserSubmit}>
        <label>
          Name:
          <br />
          <input name="name" required />
        </label>
        <Button>Create user</Button>
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
          <input name="text" required />
        </label>
        <label>
          <br />
          Author ID:
          <br />
          <input name="author" required />
        </label>
        <br />
        <Button>Create card</Button>
      </form>
      {cards.map(card => (
        <div key={card._id}>
          {card.text}({card.author.name})
        </div>
      ))}
    </AppLayout>
  )
}

const AppLayout = styled.div`
  display: grid;
  gap: 10px;
`
