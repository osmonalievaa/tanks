const express = require('express')
const app = express()

const port = 8021

app.use(express.static('Public'))

app.listen(port, () => {
    console.log(`The Tanks server is listening on port ${port}`)
})
