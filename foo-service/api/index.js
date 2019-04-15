const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => res.json({ message: 'Welcome to foo service' }))

app.listen(port, () => console.log(`Foo service running on port ${port}`))
