const socketIO = require('socket.io')
const shortid = require('shortid')
const { ssim } = require('ssim.js')
const loadImage = require('./loadImage')

const games = {}
const images = {}
let gameCount = 0
function init(server) {
    compareImages(
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALiSURBVHhe7dsxtulQGIbhuFV0SjoGYA50hkCnk9IMqGQIdJSMIIajNAM697/337L2SracfAkhx/c0Z8tZS3jPzk7WIY3b7eZRPn/MT8qBsQCMBWAsAGMBGAvAWADGAjAWgLEAjAVgLABjARgLwFgAxgIwFuA9sY7H43A43O125nFd3CoXRVGr1ZJd+75vNtXEG/4H3+v1TqeTjqvfexlvOAxns5kZ1c7/+VW1MAxl10EQmMc1wY/CALx0AHxXrMPhsFqtzAPcdx2Gk8lkv98XfsvfNbP6/b4ZFcIFHsAFHsBYAMYCMBaAsQCMBWAsAGMBGAvAWADGAjAWgLEAjAVgLABjARgLwFgAxgIwFoCxAIwFYCwAYwEYC8BYAMYCMBaAsdycXz7nt2jcOp3O+Xz2ff9yuZhNnFlOMq2klAyu16tuUZxZDjqtdGz34cxyiEsFQaADxZnl0Gg0dJCIw5mVtNlszChN4hUTRdFgMNhut+bxb9Fut7XMeDw2m+6Kx9Inrd2dXdnW67WWEnLRYLbeFY9lntLzfs3kiu/tE+lpJYov8M1mUy9DEldu9WVfMcg7kvel41jxBX6xWOhAki2XSx3Xmn3FkC71j06wYubzuXkWzwvD0GytJ3u1MptSSsWSuToajXQH8qeQ/Zlf1M2Pq5UqFUskju1ut1u7ZHYpkT4JxsrGEnpbqk2S1eUUmSiVfXPtE2IJ+WtMp1Ozw7tazLL4ElT8eBvyc2IpZzI5aZpff574hC7y3LD9zFgqfVSKT5tlskrISzIvLnNRtz0/lrJPlAnvDSeLlJ1JyOvMWNRtr4olnEdlQsXhZELZy7mQOZWzlHhhrFieakralT+NJg6xR6BMqopYtvzhYo8K5ozilGc5T6s6lq1AuPIKTKjYO2MlOE+jxZQpkuGDYjllF3xRlEf4gQWAH1gAGAvAWADGAjAWgLEAjAVgLABjARgLwFgAxgIwFoCxAIwFYKzcPO8v3H+DdQZQQkMAAAAASUVORK5CYII=',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALiSURBVHhe7dsxtulQGIbhuFV0SjoGYA50hkCnk9IMqGQIdJSMIIajNAM697/337L2SracfAkhx/c0Z8tZS3jPzk7WIY3b7eZRPn/MT8qBsQCMBWAsAGMBGAvAWADGAjAWgLEAjAVgLABjARgLwFgAxgIwFuA9sY7H43A43O125nFd3CoXRVGr1ZJd+75vNtXEG/4H3+v1TqeTjqvfexlvOAxns5kZ1c7/+VW1MAxl10EQmMc1wY/CALx0AHxXrMPhsFqtzAPcdx2Gk8lkv98XfsvfNbP6/b4ZFcIFHsAFHsBYAMYCMBaAsQCMBWAsAGMBGAvAWADGAjAWgLEAjAVgLABjARgLwFgAxgIwFoCxAIwFYCwAYwEYC8BYAMYCMBaAsdycXz7nt2jcOp3O+Xz2ff9yuZhNnFlOMq2klAyu16tuUZxZDjqtdGz34cxyiEsFQaADxZnl0Gg0dJCIw5mVtNlszChN4hUTRdFgMNhut+bxb9Fut7XMeDw2m+6Kx9Inrd2dXdnW67WWEnLRYLbeFY9lntLzfs3kiu/tE+lpJYov8M1mUy9DEldu9WVfMcg7kvel41jxBX6xWOhAki2XSx3Xmn3FkC71j06wYubzuXkWzwvD0GytJ3u1MptSSsWSuToajXQH8qeQ/Zlf1M2Pq5UqFUskju1ut1u7ZHYpkT4JxsrGEnpbqk2S1eUUmSiVfXPtE2IJ+WtMp1Ozw7tazLL4ElT8eBvyc2IpZzI5aZpff574hC7y3LD9zFgqfVSKT5tlskrISzIvLnNRtz0/lrJPlAnvDSeLlJ1JyOvMWNRtr4olnEdlQsXhZELZy7mQOZWzlHhhrFieakralT+NJg6xR6BMqopYtvzhYo8K5ozilGc5T6s6lq1AuPIKTKjYO2MlOE+jxZQpkuGDYjllF3xRlEf4gQWAH1gAGAvAWADGAjAWgLEAjAVgLABjARgLwFgAxgIwFoCxAIwFYKzcPO8v3H+DdQZQQkMAAAAASUVORK5CYII='
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
            resolve(mssim)
        })
    })
}
module.exports = {
    init
}
