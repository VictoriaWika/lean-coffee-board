export default function createUser(user) {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then(res => res.json())
}
