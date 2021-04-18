const express = require('express')
const app = express()
const httpServer = require('http').createServer(app)
const socket = require('./socket')
const path = require('path')
const history = require('connect-history-api-fallback')

socket.init(httpServer)

const staticFileMiddleware = express.static(
    path.join(__dirname, '..', 'public', 'dist')
)
app.use(staticFileMiddleware)
app.use(
    history({
        disableDotRule: true,
        verbose: true
    })
)
app.use(staticFileMiddleware)
app.get('/', (req, res) => {
    res.send('testo')
})

httpServer.listen(process.env.PORT || 5000)
