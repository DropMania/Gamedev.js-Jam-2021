const socketIO = require('socket.io')
function init(server) {
    const io = socketIO(server, {
        cors: {
            origin: 'http://localhost:3000',
            methods: ['GET', 'POST']
        }
    })

    io.on('connection', (socket) => {
        console.log('new connection!')
    })
}

module.exports = {
    init
}
