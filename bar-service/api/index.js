const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => res.json({ message: 'Welcome to bar service' }))

app.listen(port, () => console.log(`Bar service running on port ${port}`))
