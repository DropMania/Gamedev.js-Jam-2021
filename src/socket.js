const socketIO = require('socket.io')
const shortid = require('shortid')
const { ssim } = require('ssim.js')
const loadImage = require('./loadImage')
const wordList = require('./wordList')

const games = {}
const images = {}
let gameCount = 0
function init(server) {
    const io = socketIO(server, {
        cors: {
            origins: [
                'http://localhost:3000',
                'https://dropmania.itch.io/',
                'https://v6p9d9t4.ssl.hwcdn.net/'
            ],
            methods: ['GET', 'POST']
        }
    })

    io.on('connection', (socket) => {
        socket.on('createGame', (data, akn) => {
            let gameId = shortid.generate()
            games[gameId] = {
                players: [],
                started: false,
                maxPlayers: 2,
                minPlayers: 2,
                state: 'NONE',
                timeLeft: 30,
                defaultTime: 30,
                currentWord: '',
                lifes: 3,
                currentCompare: 0,
                threshold: 20,
                score: 0,
                type: data.type
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
                        sort: games[data.gameId].players.length
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

        socket.on('request_public_games', (akn) => {
            let publicGames = Object.entries(games).filter(
                (g) => g[1].type == 'public'
            )
            let availableGames = publicGames.filter((g) => {
                return g[1].players.length < g[1].maxPlayers
            })
            akn(availableGames)
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

        socket.on('done_drawing', async ({ gameId, playerId, image }) => {
            if (images.hasOwnProperty(gameId)) {
                images[gameId].push([playerId, image])
                if (games[gameId].players.length == images[gameId].length) {
                    io.to(gameId).emit('image_updated', images[gameId])
                    let result = await compareImages(
                        images[gameId][0][1],
                        images[gameId][1][1]
                    )
                    games[gameId].currentCompare = result
                    if (result < games[gameId].threshold) {
                        games[gameId].lifes--
                    } else {
                        games[gameId].score++
                    }
                    if (games[gameId].lifes == 0) {
                        games[gameId].state = 'LOST'
                    }
                    callUpdate(io, gameId)
                }
            }
        })
    })
}

async function setDisplayState(gameId, game, io) {
    game.state = 'DISPLAY'
    let word = pickRandom(wordList)
    game.currentWord = word
    callUpdate(io, gameId)
    await sleep(3000)
    setDrawState(gameId, game, io)
}

async function setDrawState(gameId, game, io) {
    images[gameId] = []
    game.state = 'DRAW'
    callUpdate(io, gameId)
    let timer = setInterval((_) => {
        game.timeLeft--
        io.to(gameId).emit('timer_updated', game.timeLeft)
        if (game.timeLeft == 0) {
            clearInterval(timer)
            game.timeLeft = game.defaultTime
            setCompareState(gameId, game, io)
        }
    }, 1000)
}

async function setCompareState(gameId, game, io) {
    game.state = 'COMPARE'
    callUpdate(io, gameId)
    await sleep(10000)
    if (game.state != 'LOST') {
        setDisplayState(gameId, game, io)
    } else {
        game.state = 'NONE'
        game.lifes = 3
        game.score = 0
        callUpdate(io, gameId)
    }
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

function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function sleep(time) {
    return new Promise((res) => setTimeout(res, time))
}
module.exports = {
    init
}
