const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const port = 8021

app.use(express.static('Public'))

io.on('connection', socket => {
    socket.on('cmd', key => console.log(key))
})

http.listen(port, () => {
    console.log(`The Tanks server is listening on port ${port}`)
})
