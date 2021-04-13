const app = require('express')()
const httpServer = require('http').createServer(app)
const socket = require('./socket')

socket.init(httpServer)

app.get('/', (req, res) => {
    res.send('testo')
})

httpServer.listen(5000)
