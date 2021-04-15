const socketIO = require('socket.io')
const shortid = require('shortid')
const { ssim } = require('ssim.js')
const loadImage = require('./loadImage')

const games = {}
const images = {}
let gameCount = 0
function init(server) {
    compareImages(
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHfSURBVHhe7dchksJAEEDRSCQSyVGQHAGJ5BYoiiMgsdyAoyHZrp2pJLtLpfIXYjr/uUxi5ldnCM1ToxkLMBZgLMBYgLEAYwHGAowFGAswFmAswFiAsQBjAcYCjAUYCzAWYCzAWICxAGMBxgKMBRgLMBZgLMBYgLEAYwHGAowFvBvrdrudTqd6kd27saJU08xlPIf2OaupGWMo1qymZgxbAMYCjAUYCzAWMFWs+/2+2Wyu12u9TmGqWKvVKj47FotFvU5hkliXyyVKFXUphUk2U8Yq7Ha7upTC52PFaVVKhcfjUVdT+HysdqxCXcri8/upnZrmcDjUpSw+HOt4PNZUGf+Bd1t6/8uo/yOY7Ggvuljtl9H/ekXr5XJZSm2322RHe9HFikxlq2G9XseY1BsjRN+2VEhZKnSxzudz3WtPVBsetLgbz9Snv+U711s/juGXvVr9cPHS/WpUJC4VfsQq4iXa7/d196PFiZ717Wu9iNUaHrTWHDIVQ7H6XobL/dL9NTaWgrEAYwHGAowFGAswFmAswFiAsQBjAcYCjAUYCzAWYCzAWICxAGMBxgKMBRgLMBZgLMBYgLEAYwHGAowFGAswFmAswFiAsQBjAcYCjAUYCzAWYCzAWICxRns+vwChMlTbXIsfgAAAAABJRU5ErkJggg==',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIbSURBVHhe7doxjhoxGEBhkoqSku04CnRwA0pKzgAFHRwBOmg5AVyGnhtAR/7E1gglq9W8AUXyzvsaxjM0frI90i4/Ho9HR/X8zJ+qwViAsQBjAcYCjAUYCzAWYCzAWICxAGMBxgKMBRgLMBZgLMBYgLEAYwHGAowFGAswFmAswFiAsQBjAcYCjAUYCzAWYCzAWMB3jnU8HtfrdR68w3eOdblclstlHrxDqT/AjVUTLRaLRR7/F6WurLevmjr8aTfg2xAwFmAswFhAG2Odz+fRaHQ4HPK4tja+DT8+Pq7Xa7fbvd1u+VY9rVtZu90uSsXF/X5Pd4BYWa3S7/fTxKfTab5VW7u2YZxWk8kkXccejJ2YrmtqV6x0WqXrBhNv15lVlZrP5+mC+b0X22G1WuU5N511GbFOp9NwONzv93nMbbfb3KnR0Z6UESu9wuI8btYrWvd6vVRqPB7H0Z4fQGXEen5tDQaDWCb5QQ3RtyoVGpcKZcTabDZ5rk+i2tcLLZ7Gd/K3/4hzPT9rpIxY4dNeledwsen+apS8WCoUEyuJTTSbzfLsa4sT/ZXdVyksVuXrhVZ5V6ak1FjPPg33+qb7l/+wAPxLKWAswFiAsQBjAcYCjAUYCzAWYCzAWICxAGMBxgKMBRgLMBZgLMBYgLEAYwHGAowFGAswFmAswFiAsQBjAcYCjAUYCzAWYCzAWICxAGMBxgKMVVun8wuqMc6KM9cUbAAAAABJRU5ErkJggg=='
    ).then((ssim) => console.log(ssim))
    const io = socketIO(server, {
        cors: {
            origin: 'http://localhost:3000',
            methods: ['GET', 'POST']
        }
    })

    io.on('connection', (socket) => {
        socket.on('createGame', (data, akn, time = 90) => {
            let gameId = shortid.generate()
            games[gameId] = {
                players: [],
                started: false,
                maxPlayers: data.maxPlayers,
                minPlayers: 2,
                state: 'NONE',
                timeLeft: time,
                defaultTime: time
            }
            images[gameId] = []
            akn({ success: true, gameId })
            gameCount++
            console.log(games)
        })

        socket.on('player_join_game', (data, akn) => {
            if (games.hasOwnProperty(data.gameId)) {
                if (
                    games[data.gameId].players.length <
                    games[data.gameId].maxPlayers
                ) {
                    socket.join(data.gameId)
                    const player = {
                        id: data.id,
                        name: data.name,
                        host: data.host,
                        active: true
                    }
                    games[data.gameId].players.push(player)
                    akn(player)
                    callUpdate(io, data.gameId)
                }
            } else {
                akn({ id: false })
            }
        })

        socket.on('request_game', (data, akn) => {
            if (games.hasOwnProperty(data.gameId)) {
                socket.join(data.gameId)
                callUpdate(io, data.gameId)
            }
        })

        socket.on('request_image', (data, akn) => {
            if (images.hasOwnProperty(data.gameId)) {
                io.to(data.gameId).emit('image_updated', images[data.gameId])
            }
        })

        socket.on('set_config', (gameId, config) => {
            if (games.hasOwnProperty(gameId)) {
                games[gameId] = {
                    ...games[gameId],
                    ...config
                }
                callUpdate(io, gameId)
            }
        })

        socket.on('start_game', async (gameId) => {
            if (games.hasOwnProperty(gameId)) {
                games[gameId].started = true
                setDisplayState(gameId, games[gameId], io)
            }
        })
    })
}

async function setDisplayState(gameId, game, io) {
    game.state = 'DISPLAY'
    callUpdate(io, gameId)
}

function callUpdate(io, gameId) {
    io.to(gameId).emit('game_updated', games[gameId])
}

function compareImages(img1, img2) {
    return new Promise((resolve) => {
        Promise.all([
            loadImage(Buffer.from(img1.split(',')[1], 'base64')),
            loadImage(Buffer.from(img2.split(',')[1], 'base64'))
        ]).then(([img1, img2]) => {
            let { mssim } = ssim(img1, img2)
            resolve(Math.ceil(mssim * 100))
        })
    })
}
module.exports = {
    init
}
