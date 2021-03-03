const express = require('express')

const app = express()

app.use((req, res) => {
    console.log(req.method, req.url)
    res.end('Hello world')
})


app.listen(3000, () => {
    console.log('Server startet at http://localhost:3000')
})